$(function(){
	//设置可视区高度－wrap高度
	var clientH = $(document).height();
	var oWrap = $('#wrap');
	oWrap.css('height',clientH);
	// oWrap.load('inc/header.inc');
	var imageArray;
	var hotArr;
	var typeArr;
	var page = 1;
    ajaxGet("/wap/campaign/list", '', getList); 
    // 测试数据
    //var data={"code":200,"info":"操作成功","data":{"list":[{"id":"527","title":"邀您一起赏上帝的盆景·黄山·徽派村落西递和宏村·江南小镇~木坑竹海~婺源油菜花","destination":"江西,九江","rendezvous":"九江火车站出站口，找6371户外联盟队旗","price":"200.00","origin":"狼途户外俱乐部","totalNum":"50","createTime":"1488881760","updateTime":"2017-03-07 18:16:00","beginTime":"2017-04-02","endTime":"2017-04-04","keywords":"","dayNum":"2","campType":"|0|1|4|","locationName":"九江","isStick":"0","isDel":"0","headImg":"https://www.ioutdoor.org/upload/20170307181600_463.jpg"},{"id":"526","title":"黄山火车团走进“黄山-宏村-西递-木坑-婺源油菜花”黄山云海奇峰","destination":"江西,九江","rendezvous":"九江火车站","price":"680.00","origin":"山山户外","totalNum":"50","createTime":"1488881550","updateTime":"2017-03-07 18:12:30","beginTime":"2017-04-02","endTime":"2017-04-04","keywords":"","dayNum":"2","campType":"|0|1|","locationName":"九江","isStick":"0","isDel":"0","headImg":"https://www.ioutdoor.org/upload/20170307181230_961.jpg"},{"id":"525","title":"黄山-宏村-西递-木坑-婺源小李坑”黄山云海奇峰~可代订火车票","destination":"江西,九江","rendezvous":"九江火车站集合","price":"680.00","origin":"行途户外","totalNum":"50","createTime":"1488880583","updateTime":"2017-03-07 17:56:23","beginTime":"2017-04-02","endTime":"2017-04-04","keywords":"","dayNum":"2","campType":"|0|1|4|","locationName":"九江","isStick":"0","isDel":"0","headImg":"https://www.ioutdoor.org/upload/20170307175623_762.png"},{"id":"524","title":"有一种美叫灵山，4.2-4.4灵山登顶穿越","destination":"江西,上饶","rendezvous":"灵山","price":"380.00","origin":"鹰野户外俱乐部","totalNum":"20","createTime":"1488879281","updateTime":"2017-03-07 17:34:41","beginTime":"2017-04-02","endTime":"2017-04-04","keywords":"","dayNum":"2","campType":"|0|1|4|","locationName":"上饶","isStick":"0","isDel":"0","headImg":"https://www.ioutdoor.org/upload/20170307173441_344.jpg"},{"id":"523","title":"登高山踏草甸·赏云海日出日落·三日轻装（逃票）穿越","destination":"江西,南昌","rendezvous":"南昌火车站","price":"680.00","origin":"三人行俱乐部","totalNum":"50","createTime":"1488878793","updateTime":"2017-03-07 17:26:33","beginTime":"2017-04-02","endTime":"2017-04-04","keywords":"","dayNum":"2","campType":"|0|1|4|","locationName":"南昌","isStick":"0","isDel":"0","headImg":"https://www.ioutdoor.org/upload/20170307172633_358.jpg"},{"id":"522","title":"户外爱好者的天堂武功山、高山草甸、天然氧吧、仙女湖、爱情岛","destination":"江西,南昌","rendezvous":"北京西站北广场旗杆处","price":"650.00","origin":"熊出没俱乐部","totalNum":"25","createTime":"1488878576","updateTime":"2017-03-07 17:22:56","beginTime":"2017-04-01","endTime":"2017-04-04","keywords":"","dayNum":"3","campType":"|0|1|4|","locationName":"南昌","isStick":"0","isDel":"0","headImg":"https://www.ioutdoor.org/upload/20170307172256_279.jpg"},{"id":"521","title":"清明·武功山❤金顶后山不买票路线-日出日落云海","destination":"江西,萍乡","rendezvous":"南昌火车站","price":"650.00","origin":"魔族户外","totalNum":"25","createTime":"1488878062","updateTime":"2017-03-07 17:14:22","beginTime":"2017-04-02","endTime":"2017-04-04","keywords":"","dayNum":"2","campType":"|0|1|4|","locationName":"萍乡","isStick":"0","isDel":"0","headImg":"https://www.ioutdoor.org/upload/20170307171422_153.jpg"},{"id":"520","title":"逃票江西武功山高山云海草甸3日轻装经典穿越","destination":"江西,吉安","rendezvous":"惠新西街南口地铁站C出","price":"680.00","origin":"山哥户外","totalNum":"25","createTime":"1488877615","updateTime":"2017-03-07 17:06:55","beginTime":"2017-04-02","endTime":"2017-04-04","keywords":"","dayNum":"2","campType":"|0|1|4|","locationName":"吉安","isStick":"0","isDel":"0","headImg":"https://www.ioutdoor.org/upload/20170307170655_392.jpg"},{"id":"519","title":"【免票】武功山-徒步穿越，江南三大名山之一，看日出看日落看云海","destination":"江西,萍乡","rendezvous":"北京","price":"350.00","origin":"北京贼猫户外旅行","totalNum":"50","createTime":"1488877418","updateTime":"2017-03-07 17:03:38","beginTime":"2017-04-02","endTime":"2017-04-04","keywords":"","dayNum":"2","campType":"|0|1|4|","locationName":"萍乡","isStick":"0","isDel":"0","headImg":"https://www.ioutdoor.org/upload/20170307170338_689.jpg"},{"id":"518","title":"清明、天上草原人间仙境“武功山”，富硒温泉，仙女湖","destination":"江西,南昌","rendezvous":"北京西站北广场旗杆处","price":"650.00","origin":"821户外俱乐部","totalNum":"25","createTime":"1488876975","updateTime":"2017-03-07 16:56:15","beginTime":"2017-04-01","endTime":"2017-04-03","keywords":"","dayNum":"2","campType":"|0|1|4|","locationName":"南昌","isStick":"0","isDel":"0","headImg":"https://www.ioutdoor.org/upload/20170307165615_873.jpg"}],"img":[{"id":"1","img":"https://www.ioutdoor.org/upload/20170207153811_581.jpg"}],"campTypeArr":["徒步","登山","跑步","越野","自由行"],"hotAreaArr":["上海","北京","四川","内蒙古"]}};
    //getList(data);
    function getList(data){
	 	console.log("list:"+JSON.stringify(data));
	 	var campList = data.data.list;
	 	var campListTmp = $('#campListTmp').render(campList);
         	var campListCon = $('#campListCon');
         	campListCon.append(campListTmp);
		imageArray = data.data.img;
		hotArr = data.data.hotAreaArr;
		typeArr = data.data.campTypeArr;
	 }

	//轮播图
	var slideTmp = $('#slideTmp').render(imageArray);
	var slideCon = $('#slide_box');
	slideCon.append(slideTmp);
	var slideDotTmp = $('#slideDotTmp').render(imageArray);
	var slideDotCon = $('.slide_dot');
	slideDotCon.append(slideDotTmp);
	slideDotCon.find('li').eq(0).addClass('on');

	$('#slide_box').append($('#slide_box').html());
	var oSlideList = $('#slide_box li');
	var oSlideLength = oSlideList.length;
	var slideNum = 0;
	var dotNum = 0;
	var oSlideWidth = oSlideList.eq(0).width();
	$('#slide_box').css('width',oSlideLength*oSlideWidth);
	var timer = setInterval(function(){
		if(slideNum < oSlideLength){
			
			if(slideNum == oSlideLength/2){
				slideNum = 0;
				$('#slide_box').css('left',0);
			}
			slideNum++;
			dotNum = slideNum;
			if(dotNum == oSlideLength/2){
				dotNum = 0;
			}
			$('#slide_box').animate({left:-oSlideWidth*slideNum});
			$('.slide_dot li').removeClass('on').eq(dotNum).addClass('on');
		}
	},5000);

	//种类，热门城市
	for(var itemKey in hotArr){
		$("#hotArr").append("<span>"+hotArr[itemKey]+"</span>");
	}
	for(var itemKey in typeArr){
		$("#typeArr").append("<span data-id='"+itemKey+"'>"+typeArr[itemKey]+"</span>");
	}
	//切换标签－热门城市，种类
	$('.sel li').off('click').on('click',function(){
		$('.sel li').removeClass('on');
		$(this).addClass('on');
		var index = $(this).index()-1;
		$('.barBox li').removeClass('on');
		if(index >= 0){
			$('.barBox li').eq(index).addClass('on');
			$('.barBox').show();
		}else{
			$('.barBox').hide();
			ajaxGet("/wap/campaign/list", '', getList);
		}
	});
	//点击标签类
	var hotArrStr = [];//用来存储被筛选出的热门城市
	var typeArrStr = [];//用来存储被筛选出的热门种类
	$('.barBox li span').off('click').on('click',function(){
		var index = $(this).parent().index();
		var text = $(this).html();
		if($(this).hasClass('on')){
			if(index == 0){
				var rem = $.inArray(text,hotArrStr);
				hotArrStr.splice(rem,1);
			}else{
				var rem = $.inArray(text,typeArrStr);
				typeArrStr.splice(rem,1);
			}
			$(this).removeClass('on');
		}else{
			if(index == 0){
				var rem = $.inArray(text,hotArrStr);
				if(rem == -1){
					hotArrStr.push(text);
				}
			}else{
				var rem = $.inArray(text,typeArrStr);
				if(rem == -1){
					typeArrStr.push(text);
				}
			}
			$(this).addClass('on');
		}	
	});

	//点击重置
	$('.reset').off('click').on('click',function(){
		hotArrStr = [];
		typeArrStr = [];
		$('.barBox li span').removeClass('on');
	});
	//点击确定－筛选
	$('.confirm').off('click').on('click',function(){
		var hotArr = hotArrStr.join(",");
		var typeArr = typeArrStr.join(",");

		$('.barBox').hide();
		//此处调用接口
		ajaxGet("/wap/campaign/list", '', getList);
	});

	//滚动刷新--scroll
	 $(window).scroll(function () {
        //$(window).scrollTop()这个方法是当前滚动条滚动的距离
        //$(window).height()获取当前窗体的高度
        //$(document).height()获取当前文档的高度
        var bot = 50; //bot是底部距离的高度
        if ((bot + $(window).scrollTop()) >= ($(document).height() - $(window).height())) {
           //当底部基本距离+滚动的高度〉=文档的高度-窗体的高度时；
            //我们需要去异步加载数据了
            page++;
    		ajaxGet("/wap/campaign/list", page, getList); 
        }
    });
});
