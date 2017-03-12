$(function(){
	var id = getQueryString("id");
	var starNum;
	//点击小星星
	$('.starNum').off('click').on('click',function(){
		var index = $(this).index();
		if($(this).hasClass('on')){
			for(var i=5; index<=i; i--){
				$('.starNum').eq(i).removeClass('on');
			}
			starNum = index;
		}else{
			$('.starNum').removeClass('on');
			for(var i=0; i<= index; i++){
				$('.starNum').eq(i).addClass('on');
			}
			starNum = index + 1;
		}
	});
	$(".comfirm").click(function(){
		var params = "starLevel="+starNum+"&orderId="+id+"&mark="+$("textarea").val();
		ajaxPost("/wap/order/evaluate", params, function(data){
			console.log(data);
			if(data.code == 200){
				location.href = "user.html";
			}else{
				alert(data.info);
				return false;
			}
		});
	});
});
