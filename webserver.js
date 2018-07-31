var http = require('http');
var fs = require('fs');
var url  = require('url');


http.createServer(function(request,response){
	//解析请求
	var pathname = url.parse(request.url).pathname;
	console.log('pathname: ' + pathname);
	console.log('filename: ' + pathname.substr(1));
	//读取请求的内容
	fs.readFile(pathname.substr(1),function(err,data){
		if(err){
			console.error(err);
			response.writeHead(404,{'Content-Type':'text/html'});
		}else{
			response.writeHead(200,{'Content-Type':'text/html'});
			
			//写入相应内容
			response.write(data.toString());
		}
		//发送响应内容
		response.end();
	});
}).listen(8100);

console.log('server running at http:127.0.0.1:8100/');
