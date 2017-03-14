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
	 	console.log(data);
	 	var campList = data.data.list;
	 	var campListTmp = $('#campListTmp').render(campList);
         	var campListCon = $('#campListCon');
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
			$('.barBox').hide();
		}
	});
	//点击标签类
	hotArr = [];
	typeArr = [];
	$('.barBox li span').off('click').on('click',function(){
		var index = $(this).parent().index();
		if($(this).hasClass('on')){
			if(index == 0){
				hotArr.replace($(this.innerHTML()),"");
			}else{
				typeArr.replace($(this.innerHTML()),"");
			}
			$(this).removeClass('on');
		}else{
			if(index == 0){
				hotArr = hotArr? $(this).innerHTML():hotArr+ "," + $(this).innerHTML();
			}else{
				typeArr = typeArr? $(this).innerHTML():typeArr+ "," + $(this).innerHTML();
			}
			$(this).addClass('on');
		}	
	});
	// $('.barShow li span').toggle(function(){
	// 	var index = $(this).parent().index();
	// 	if(index){
	// 		hotArr = hotArr? $(this).html():hotArr+ "," + $(this).html();
	// 	}else{
	// 		typeArr = typeArr? $(this).html():typeArr+ "," + $(this).html();
	// 	}
	// 	$(this).addClass('on');
	// },function(){
	// 	var index = $(this).parent().index();
	// 	if(index){
	// 		hotArr.replace($(this.html),"");
	// 	}else{
	// 		typeArr.replace($(this.html),"");
	// 	}
	// 	$(this).removeClass('on');
	// });

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
    		ajaxGet("/wap/campaign/list", page, getList); 
        }
    });
});
