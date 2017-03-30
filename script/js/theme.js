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
});
