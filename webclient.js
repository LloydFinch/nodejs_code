var http = require('http');

//请求的选项
var options = {
	host: 'localhost',
	port: '8100',
	path: '/index.html'
};

//处理响应的回调
var callback = function(response){
	var body = '';
	
	//收到数据
	response.on('data',function(data){
		body += data;
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




