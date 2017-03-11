$(function(){
	//设置可视区高度－wrap高度
	var clientH = $(document).height();
	var oWrap = $('#wrap');
	oWrap.css('height',clientH);
	ajaxGet("/wap/theme/list", '', function(data){
		console.log(data);
		var themeList = data.data.list;
		var campListTmp = $('#themeListTmp').render(themeList);
        	var campListCon = $('#themeListUl');
        	campListCon.append(campListTmp);
	});

	var data = [
		{title:"北京到上海日游",introduction:"宝宝最好看，宝宝最帅",picUrl:"http://www.ioutdoor.org/upload/20170308163940_293.jpg",id:1},
		{title:"北京到上海日游",introduction:"宝宝最好看，宝宝最帅",picUrl:"http://www.ioutdoor.org/upload/20170308163940_293.jpg",id:1},
		{title:"北京到上海日游",introduction:"宝宝最好看，宝宝最帅",picUrl:"http://www.ioutdoor.org/upload/20170308163940_293.jpg",id:1},
		{title:"北京到上海日游",introduction:"宝宝最好看，宝宝最帅",picUrl:"http://www.ioutdoor.org/upload/20170308163940_293.jpg",id:1},
		{title:"北京到上海日游",introduction:"爱我美美哒老婆",picUrl:"http://www.ioutdoor.org/upload/20170308163940_293.jpg",id:1},
	];
	var campListTmp = $('#themeListTmp').render(data);
	var campListCon = $('#themeListUl');
	campListCon.append(campListTmp);
});
