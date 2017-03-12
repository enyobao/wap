/**
 * Author:             Enyo Bao
 * Version:            1.0
 * Date                2017/3/9
 * Discription:
 */
$(function(){
	//判断用户是否登录，以下为假数据
	var login = false;
	var userName = '';
	ajaxGet("/wap/user/info", "", function(data){
		console.log(data);
		if(data.code == 200){
			login = true;
			userName = data.data.name;
		}else{
			login = false;
		}	
	});
	console.log("---login status---" + login);
	if(login){//登录状态下获取订单信息
		$('.userCon .username').html(userName);
		var data = [
			{
				src:"http://dl.bizhi.sogou.com/images/2012/03/14/124196.jpg",
				title:"北京到上海3日游",
				departure:"北京到上海",
				starTime:"2017-04-03",
				price:23333,
				status:2,
				statusMark:"付款成功",
				mark:[
					{
						userName:"阿妮尔",
						phone:"18822038384"
					},
					{
						userName:"阿妮尔",
						phone:"18822038384"
					}
				]
			},
			{
				src:"http://dl.bizhi.sogou.com/images/2012/03/14/124196.jpg",
				title:"北京到上海3日游",
				departure:"北京到上海",
				starTime:"2017-04-03",
				price:23333,
				status:2,
				statusMark:"付款成功",
				mark:[
					{
						userName:"阿妮尔",
						phone:"18822038384"
					},
					{
						userName:"阿妮尔",
						phone:"18822038384"
					}
				]
			},
			{
				src:"http://dl.bizhi.sogou.com/images/2012/03/14/124196.jpg",
				title:"北京到上海3日游",
				departure:"北京到上海",
				starTime:"2017-04-03",
				price:23333,
				status:2,
				statusMark:"付款成功",
				mark:[
					{
						userName:"阿妮尔",
						phone:"18822038384"
					},
					{
						userName:"阿妮尔",
						phone:"18822038384"
					}
				]
			}
		];

		if(data.length > 0){//显示订单列表
			var orderListTmp = $('#orderListTmp').render(data);
			var orderListCon = $('#orderCon');
			orderListCon.append(orderListTmp);

			var oUpDown = $('.up_down');
			$('.up').hide();
			oUpDown.off('click').on('click',function(){
				var down = $(this).find('.down');
				var up = $(this).find('.up');
				if(down.css('display') == 'block'){
					down.hide();
					up.show();
					$(this).next().show();
				}else{
					down.show();
					up.hide();
					$(this).next().hide();
				}
			});
		}else{//显示暂无订单
			$('.orderNone').show();
		}

	}else{
		$('.login').show();
		$('.userCon .username').hide();
		$('.orderNone').show();
	}


});
