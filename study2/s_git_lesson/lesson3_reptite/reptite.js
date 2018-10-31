
//这个客户度啊请求类用来模拟爬虫，结果是不行的...fuck
var http = require('http');

var options = {
	host: 'https://cnodejs.org/'

}

var callback = function(response){
	var body = '';

	//收到数据
	response.on('data',function(){
		body += data
	});

	//数据接收完毕
	response.on('end',function(){
		console.log(body);
	});
}

//定义请求
var request = http.request(options,callback);

//发送请求
request.end();





