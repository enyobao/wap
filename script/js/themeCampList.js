$(function(){
	//设置可视区高度－wrap高度
	var clientH = $(document).height();
	var oWrap = $('#wrap');
	oWrap.css('height',clientH);

	var id = getQueryString("id");

	ajaxGet("/wap/theme/camp", "id="+id, function(data){
		var campList = data.data.campArr;
		var campListTmp = $('#themeCampListTmp').render(campList);
        	var campListCon = $('#themeCampListUl');
        	campListCon.append(campListTmp);
	});
});
