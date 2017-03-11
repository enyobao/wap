/**
 * Author:             Enyo Bao
 * Version:            1.0
 * Date                2017/3/9
 * Discription:
 */
$(function(){
	//设置可视区高度－wrap高度
	var clientH = $(document).height();
	var oWrap = $('#wrap');
	oWrap.css('height',clientH);
 
	var id = getQueryString("id");
	
	$("#slide_box").html("");
	ajaxGet("/wap/campaign/detail", "id="+id, function(data){
		console.log(data.data);
		$(".title").html(data.data.title);
		$(".departure").html(data.data.destination);
		$(".startime").html(data.data.begintime);
		$(".price").html("￥"+data.data.price);
		for(var itemKey in data.data.imageArr){
			var htmlStr = "<li><img src='"+data.data.imageArr[itemKey]+"'></li>";
			$("#slide_box").append(htmlStr);
		}
	       var renderStr = [
			{campTitle : "线路介绍",campContent:data.data.lineIntroduction},
			{campTitle : "行程安排",campContent:data.data.scheduling},
			{campTitle : "费用说明",campContent:data.data.expenseExplanation},
			{campTitle : "更多介绍",campContent:data.data.moreIntroduction},
		]; 	
		var campListTmp = $('#detailTmp').render(renderStr);
        	var campListCon = $('#detailCon');
        	campListCon.append(campListTmp);


		$('.camp_title').off('click').on('click',function(){
                var oParent = $(this).parent();
                var campCon = oParent.children().eq(1);
                if(campCon.css('display') == 'block'){
                        campCon.hide();
                }else{
                        campCon.show();
        	}
	        });

	});	
});
