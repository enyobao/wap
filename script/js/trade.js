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

    var addUserCon = $('#addUserCon');

    $(".add").click(function(){
    	var valueNum =parseInt($(".num").val());
        valueNum++;
        var addUserTmp = $('#addUserTmp').render({ind:valueNum-1});
        addUserCon.append(addUserTmp);
    	$(".num").val(valueNum);
        var price = parseInt($("#campPrice").text()) * (valueNum) / (valueNum-1);
	   $("#campPrice").text(changeTwoDecimal_f(price));
	
    });
    $(".reduce").click(function(){
	    var valueNum =parseInt($(".num").val());
        valueNum--;
        var userChild = addUserCon.children();
        userChild.eq(valueNum).remove();
        $(".num").val(valueNum);
        var price = parseInt($("#campPrice").text()) * (valueNum) / (valueNum+1);
        $("#campPrice").text(changeTwoDecimal_f(price));
    });
    $(".comfirm").click(function(){
	var num = $(".num").val();
	var id = getQueryString("id");
	var userName = "";
	var phone = "";
	var mark = "";
	var sex = "";
	var str = "[";
	var arr = new Array();
	for(var ind=0;ind<num;ind++){
		var tmp = "{";
		tmp += "\"userName\":\""+$("input[name='userName_"+ind+"']").val()+"\",";
		tmp += "\"phone\":\""+$("input[name='phone_"+ind+"']").val()+"\",";
		tmp += "\"sex\":\""+$("input[name='sex_"+ind+"']:checked").val()+"\",";
		tmp += "\"mark\":\""+$("textarea[name='mark_"+ind+"']").val()+"\"";
		tmp += "}";
		console.log(tmp);
		arr[ind] = tmp;
	}
	str += arr.join(",") + "]";
 	
	var params = "campId="+id+"&num="+num+"&userList="+str;

	ajaxPost("/wap/order/add", params, function(data){
		console.log(data);
		if(data.code == 200){
			var orderId = data.data;
			ajaxPost("/wap/order/pay", "orderId="+orderId, function(data){
				console.log("----wap----callback----");
				console.log(data);
			});
		}else if(data.code == 1002){
			location.href="/m/login.html";
		}else{
			alert(data.info);
			return false;
		}
	});	
    });
});

