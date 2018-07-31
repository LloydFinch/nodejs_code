var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var os = require('os');

const PORT = 8086;
const ipAddress = os.networkInterfaces().en0[1].address;

function start(route, handle){
	function onRequest(req,res){
		var postData = '';
		var pathname = url.parse(req.url).pathname;
		switch(req.method){
			case 'GET':
				postData += url.parse(req.url).query;
				req.setEncoding('utf8');
				route(handle,pathname,res,postData);
			break;
			
			case 'POST':
				req.addListener('data',function(err,chunk){
					if(err){
						return console.error(err);
					}else{
						postData += chunk;
					}
				});
				req.addListener('end',function(){
					route(handle,pathname,res,postData);
				});
			break;
		};
	}
	
	http.createServer(onRequest).listen(PORT);
	console.log('server start in %s:%d',ipAddress,PORT);
}

exports.start = start;
