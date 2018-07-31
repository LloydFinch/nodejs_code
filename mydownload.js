
const PORT = 8081;

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var os = require('os');

var ipAddress = os.networkInterfaces().en0[1].address;

var server = http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	//在请求的index前面加上'index/'前缀变成'index/index.html'
	var realpath = path.join('index/',pathname);
	console.log('file path is: ' + realpath);
	
	//读取文件写入到res中返回给client
	fs.readFile(realpath,function(err,data){
		if(err){
			res.writeHead(404,{'Content-Type':'text/plain;charset="utf-8"'});
			res.write('404,页面不存在');
			res.end();
		}else{
			res.writeHead(200,{'Content-Type':'text/html;charset="utf-8"'});
			res.write(data);
			res.end();
		}
	});
});

server.listen(PORT);
console.log('server start in %s:%d',ipAddress,PORT);
