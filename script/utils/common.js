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