
var http = require('http');
var querystring = require('querystring');
var util = require('util');
console.log('server start...');
http.createServer(function(request,response){
	
	//post用来保存请求的信息
	var post = '';
	request.on('data',function(chunk){
		post += chunk;
	}); 

	request.on('end',function(){
		post = querystring.parse(post);
		response.end(util.inspect(post));
	});
}).listen(8200);
