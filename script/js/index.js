$(function(){
	//设置可视区高度－wrap高度
	var clientH = $(document).height();
	var oWrap = $('#wrap');
	oWrap.css('height',clientH);
	// oWrap.load('inc/header.inc');
 //    ajaxGet("/wap/campaign/list", '', function(data){
	// 	console.log(data);
	// 	var campList = data.list;
	// 	var campListTmp = $('#campListTmp').render(data);
 //        	var campListCon = $('#campListCon');
 //        	campListCon.append(campListTmp);
	// }); 
	var data = [
		{title:"北京到上海日游",departure:"北京－上海",starTime:"2017-12-09",price:2333},
		{title:"北京密云青龙霞1日游",departure:"北京－上海",starTime:"2017-12-09",price:2333},
		{title:"安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行",departure:"北京－上海",starTime:"2017-12-09",price:2333}
	];
	var campListTmp = $('#campListTmp').render(data);
	var campListCon = $('#campListCon');
	campListCon.append(campListTmp);
	

	//轮播图
	var imageArray = [
		'img/slide.jpg',
		'img/slide.jpg',
		'img/slide.jpg',
		'img/slide.jpg',
		'img/slide.jpg'
	];
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
});
