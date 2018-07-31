
var http = require('http');
var url = require('url');
var util = require('util');

console.log('server start...');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type': 'text/plain;charset=utf-8'});
	
	//获取地址栏输入的key-value对
	var params = url.parse(request.url,true).query;
	
	response.write('net name: ' + params.name);
	response.write('\n');
	response.write('url: ' + params.url);
	response.end();
}).listen(8100);


