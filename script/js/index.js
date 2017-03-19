$(function(){
	//设置可视区高度－wrap高度
	var clientH = $(document).height();
	var oWrap = $('#wrap');
	oWrap.css('height',clientH);
	// oWrap.load('inc/header.inc');
	var imageArray;
	var hotArr;
	var typeArr;
	var page = 1;
    ajaxGet("/wap/campaign/list", '', getList); 
    function getList(data){
	 	console.log("list:"+JSON.stringify(data));
	 	var campList = data.data.list;
	 	var campListTmp = $('#campListTmp').render(campList);
         	var campListCon = $('#campListCon');
		if(page==1){
			campListCon.children().remove();
		}
         	campListCon.append(campListTmp);
		imageArray = data.data.img;
		hotArr = data.data.hotAreaArr;
		typeArr = data.data.campTypeArr;
	 }

	//轮播图
	var slideTmp = $('#slideTmp').render(imageArray);
	var slideCon = $('#slide_box');
	slideCon.append(slideTmp);
	var slideDotTmp = $('#slideDotTmp').render(imageArray);
	var slideDotCon = $('.slide_dot');
	slideDotCon.append(slideDotTmp);
	slideDotCon.find('li').eq(0).addClass('on');

	$('#slide_box').append($('#slide_box').html());
	var oSlideList = $('#slide_box li');
	var oSlideLength = oSlideList.length;
	var slideNum = 0;
	var dotNum = 0;
	var oSlideWidth = oSlideList.eq(0).width();
	$('#slide_box').css('width',oSlideLength*oSlideWidth);
	var timer = setInterval(function(){
		if(slideNum < oSlideLength){
			
			if(slideNum == oSlideLength/2){
				slideNum = 0;
				$('#slide_box').css('left',0);
			}
			slideNum++;
			dotNum = slideNum;
			if(dotNum == oSlideLength/2){
				dotNum = 0;
			}
			$('#slide_box').animate({left:-oSlideWidth*slideNum});
			$('.slide_dot li').removeClass('on').eq(dotNum).addClass('on');
		}
	},5000);

	//种类，热门城市
	for(var itemKey in hotArr){
		$("#hotArr").append("<span>"+hotArr[itemKey]+"</span>");
	}
	for(var itemKey in typeArr){
		$("#typeArr").append("<span data-id='"+itemKey+"'>"+typeArr[itemKey]+"</span>");
	}
	//切换标签－热门城市，种类
	$('.sel li').off('click').on('click',function(){
		$('.sel li').removeClass('on');
		$(this).addClass('on');
		var index = $(this).index()-1;
		$('.barBox li').removeClass('on');
		if(index >= 0){
			$('.barBox li').eq(index).addClass('on');
			$('.barBox').show();
		}else{
			page = 1;
			$('.barBox').hide();
			ajaxGet("/wap/campaign/list", '', getList);
		}
	});
	//点击标签类
	var hotArrStr = [];//用来存储被筛选出的热门城市
	var typeArrStr = [];//用来存储被筛选出的热门种类
	$('.barBox li span').off('click').on('click',function(){
		var index = $(this).parent().index();
		var text = $(this).html();
		if($(this).hasClass('on')){
			if(index == 0){
				var rem = $.inArray(text,hotArrStr);
				hotArrStr.splice(rem,1);
			}else{
				var rem = $.inArray(text,typeArrStr);
				typeArrStr.splice(rem,1);
			}
			$(this).removeClass('on');
		}else{
			if(index == 0){
				var rem = $.inArray(text,hotArrStr);
				if(rem == -1){
					hotArrStr.push(text);
				}
			}else{
				var rem = $.inArray(text,typeArrStr);
				if(rem == -1){
					typeArrStr.push(text);
				}
			}
			$(this).addClass('on');
		}	
	});

	//点击重置
	$('.reset').off('click').on('click',function(){
		hotArrStr = [];
		typeArrStr = [];
		$('.barBox li span').removeClass('on');
	});
	//点击确定－筛选
	$('.confirm').off('click').on('click',function(){
		var hotArr = hotArrStr.join(",");
		var typeArr = typeArrStr.join(",");
		page = 1;

		$('.barBox').hide();
		//此处调用接口
		var params = "locationName="+encodeURIComponent(hotArr)+"&campType="+encodeURIComponent(typeArr)+"&keyword="+encodeURIComponent($("input[name='keyword']").val());
		ajaxGet("/wap/campaign/list", params, getList);
	});
	$("#search").on("click", function(){
	        var hotArr = hotArrStr.join(",");
                var typeArr = typeArrStr.join(",");
                page = 1;

                $('.barBox').hide();
                //此处调用接口
                var params = "locationName="+encodeURIComponent(hotArr)+"&campType="+encodeURIComponent(typeArr)+"&keyword="+encodeURIComponent($("input[name='keyword']").val());
                ajaxGet("/wap/campaign/list", params, getList);
	});

	//滚动刷新--scroll
	 $(window).scroll(function () {
        //$(window).scrollTop()这个方法是当前滚动条滚动的距离
        //$(window).height()获取当前窗体的高度
        //$(document).height()获取当前文档的高度
        var bot = 50; //bot是底部距离的高度
        if ((bot + $(window).scrollTop()) >= ($(document).height() - $(window).height())) {
           //当底部基本距离+滚动的高度〉=文档的高度-窗体的高度时；
            //我们需要去异步加载数据了
            page++;
	    var hotArr = hotArrStr.join(",");
            var typeArr = typeArrStr.join(",");
	    var params = "locationName="+encodeURIComponent(hotArr)+"&campType="+encodeURIComponent(typeArr)+"&keyword="+encodeURIComponent($("input[name='keyword']").val())+"&page="+page;
    		ajaxGet("/wap/campaign/list", params, getList); 
        }
    });
});
