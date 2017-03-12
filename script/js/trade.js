/**
 * Author:             Enyo Bao
 * Version:            1.0
 * Date                2017/3/9
 * Discription:
 */
$(function(){
    var id = getQueryString("id");
    ajaxGet("/wap/campaign/detail", "id="+id, function(data){
	console.log(data.data);
        var campInfo = data.data;
        $(".title").html(campInfo.title);
        $(".departure").html(campInfo.destination);
        $(".starTime").html(campInfo.beginTime);
        $(".price").html("￥" + campInfo.price);
        $("#campPrice").html(campInfo.price);
    });

    var tradeCon = $('.trade');

    $(".add").click(function(){
    	var valueNum =parseInt($(".num").val());
    	console.log("---num----"+valueNum);
        valueNum++;
        var arr = [];
        for(var i=0;i<valueNum; i++){
            arr.push({'valueNum':valueNum});
        }
        console.log("arr:"+JSON.stringify(arr));
        tradeCon.remove('div');
        var addUserTmp = $('#addUserTmp').render(arr);
        tradeCon.append(addUserTmp);
    	$(".num").val(valueNum);
        var price = parseInt($("#campPrice").text()) * (valueNum) / (valueNum-1);
	   $("#campPrice").text(changeTwoDecimal_f(price));
	
    });
    $(".reduce").click(function(){
	   var valueNum =parseInt($(".num").val());
        console.log("---num----"+valueNum);

        valueNum++;
        var arr = [];
        for(var i=0;i<valueNum; i++){
            arr.push({'valueNum':valueNum});
        }
        console.log("arr:"+JSON.stringify(arr));
        tradeCon.remove('div');
        var addUserTmp = $('#addUserTmp').render(arr);
        tradeCon.append(addUserTmp);

        $(".num").val(valueNum-1);
        var price = parseInt($("#campPrice").text()) * (valueNum - 2) / (valueNum-1);
        $("#campPrice").text(changeTwoDecimal_f(price));
    });
});

