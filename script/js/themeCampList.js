$(function(){
	//设置可视区高度－wrap高度
	var clientH = $(document).height();
	var oWrap = $('#wrap');
	oWrap.css('height',clientH);

	var data = [
		{title:"北京到上海日游",departure:"北京－上海",starTime:"2017-12-09",price:2333},
		{title:"北京密云青龙霞1日游",departure:"北京－上海",starTime:"2017-12-09",price:2333},
		{title:"安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行安徽黄山3日徒步旅行",departure:"北京－上海",starTime:"2017-12-09",price:2333}
	];
	var campListTmp = $('#themeCampListTmp').render(data);
	var campListCon = $('#themeCampListUl');
	campListCon.append(campListTmp);
});