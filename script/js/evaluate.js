$(function(){

	//点击小星星
	$('.starNum').off('click').on('click',function(){
		var index = $(this).index();
		if($(this).hasClass('on')){
			for(var i=5; index<=i; i--){
				$('.starNum').eq(i).removeClass('on');
			}
		}else{
			$('.starNum').removeClass('on');
			for(var i=0; i<= index; i++){
				$('.starNum').eq(i).addClass('on');
			}
		}
	});
});