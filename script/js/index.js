$(function(){
	//设置可视区高度－wrap高度
	var clientH = $(document).height();
	var oWrap = $('#wrap');
	oWrap.css('height',clientH);
	// oWrap.load('inc/header.inc');
	var imageArray;
	var hotArr;
	var typeArr;
     ajaxGet("/wap/campaign/list", '', function(data){
	 	console.log(data);
	 	var campList = data.data.list;
	 	var campListTmp = $('#campListTmp').render(campList);
         	var campListCon = $('#campListCon');
         	campListCon.append(campListTmp);
		imageArray = data.data.img;
		hotArr = data.data.hotAreaArr;
		typeArr = data.data.campTypeArr;
	 }); 

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

	$('.sel li').off('click').on('click',function(){
		$('.sel li').removeClass('on');
		$(this).addClass('on');
		var index = $(this).index()-1;
		$('barBox li').removeClass('on');
		if(index >= 0){
			$('barBox li').eq(index).addClass('on');
		}
	});
	// $("#hotAreaBut").toggle(function(){
	// 	$("#hotArr").show();
	// },function(){
	// 	$("#hotArr").hide();
	// }
	// );
	// $("#hotAreaBut").toggle(function(){
	// 	$("#typeArr").show();
	// },function(){
	// 	$("#typeArr").hide();
	// }
	// );	
});
