var http = require('http');
var url = require('url');


//定义函数供外部使用
function start(route,handle){
	
	//监听地址，默认为127.0.0.1
	var address = ''
	//监听端口
	var port = 3389;

	//定义相应的回调
	function onRequest(request,response){
		console.log('[server] received request');
		
		//解析url
		var pathname = url.parse(request.url).pathname;
		console.log(`[server] received request from ${pathname}`);
		route(handle,pathname,response,request);
	}

	//创建服务器
	var server = http.createServer(onRequest);

	//开始监听指定的地址
	server.listen(port);
	console.log('server has start in ' + port);
}
//导出为模块。供其他模块使用
exports.start = start;








