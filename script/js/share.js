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
});
