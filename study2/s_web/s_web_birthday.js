
var http = require('http');
var fs = require('fs');
var url = require('url');

const port  = 3389;

var server = http.createServer(function(req,rep){
	
	var fileName = 'birthday.html';
	fileName = url.parse(req.url).pathname.substr(1);
	console.log('pathname = ', fileName);
	fs.readFile(fileName,function(error,data){
		if(error){
			console.error(error);
			rep.writeHead(404,{'Content-Type':'text/html;charset=utf-8'});
		}else{
			rep.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
			rep.write(data.toString());
		}
		rep.end();
	});
});


server.listen(port);
console.log('server run on port ',port);



























