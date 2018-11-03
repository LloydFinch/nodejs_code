
var http = require('http');

var port = 3389;

var server = http.createServer(function(request,response){
	
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('hello world');
	response.end();
});

server.listen(port);

console.log('server starting on port ' + port);

//等价于下面的写法
//创建server
//var server = http.createServer();
//给request添加监听
//server.on('request',function(request,response){
//	response.writeHead(200,'Content-Type':'text/plain');
//	response.write('hello world');
//	response.end();
//});



