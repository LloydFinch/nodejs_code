
var http = require('http');
var fs = require('fs');
var os = require('os');
var path  = require('path');
var url = require('url');

const ipAddress = os.networkInterfaces().en0[1].address;
const PORT = 8081;

http.createServer(function(req,res){
	var reqpath  = url.parse(req.url).path;
	var realpath = path.join('index/',reqpath);
	console.log('request file path: ' + realpath);
	fs.readFile(realpath,function(err,data){
		if(err){
			console.error(err);
			res.writeHead(404,{'Content-Type':'text/plain;charset="utf-8"'});
			res.write('404,page not found!');
			res.end();
		}else{
			res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
			res.write(data);
			res.end();
		}
	});
}).listen(PORT);

console.log('server start in %s:%d',ipAddress,PORT);
