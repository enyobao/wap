$(function(){
	//设置可视区高度－wrap高度
	var clientH = $(document).height();
	var oWrap = $('#wrap');
	oWrap.css('height',clientH);
	
	ajaxGet("/wap/share/list", '', function(data){
		var shareList = data.data.list;
		var shareListTmp = $("#shareListTmp").render(shareList);
        	var shareListCon = $('#shareListUl');
       		shareListCon.append(shareListTmp);
	});

	var data = [
		{title:"北京到上海日游",detail:"宝宝最好看，宝宝最帅",shareType:1,id:1},
		{title:"北京到上海日游",shareType:2,image_first:"http://www.ioutdoor.org/upload/20170308163940_293.jpg",image_sec:"http://www.ioutdoor.org/upload/20170308163940_293.jpg",image_third:"http://www.ioutdoor.org/upload/20170308163940_293.jpg",id:1},
		{title:"北京到上海日游",detail:"宝宝最好看，宝宝最帅",shareType:1,id:1},
		{title:"北京到上海日游",shareType:2,image_first:"http://www.ioutdoor.org/upload/20170308163940_293.jpg",id:1}
	];
	var shareListTmp = $("#shareListTmp").render(data);
	var shareListCon = $('#shareListUl');
	shareListCon.append(shareListTmp);
});
