function ajaxPost(url, dataParams, funcBack){
	$.ajax({
    	url:"http://www.ioutdoor.org"+url,
    	type:'POST', //GET
    	async:true,    //或false,是否异步
    	data:dataParams,
    	timeout:5000,    //超时时间
    	dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
    	beforeSend:function(xhr){
        	console.log(xhr)
        	console.log('发送前')
    	},
    	success:funcBack,
    	error:function(xhr,textStatus){
        	console.log('错误')
        	console.log(xhr)
        	console.log(textStatus)
    	},
    	complete:function(){
        	console.log('结束')
    	}
	});
}
function ajaxGet(url, dataParams, funcBack){
	$.ajax({
    	url:url,
    	type:'GET', //GET
    	async:false,    //或false,是否异步
    	data:dataParams,
    	timeout:5000,    //超时时间
    	dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
    	beforeSend:function(xhr){
        	console.log(xhr)
        	console.log('发送前')
    	},
    	success:funcBack,
    	error:function(xhr,textStatus){
        	console.log('错误')
        	console.log(xhr)
        	console.log(textStatus)
    	},
    	complete:function(){
        	console.log('结束')
    	}
	});
}
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 
function changeTwoDecimal_f(x) {
    var f_x = parseFloat(x);
    if (isNaN(f_x)) {
        alert('function:changeTwoDecimal->parameter error');
        return false;
    }
    var f_x = Math.round(x * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}
