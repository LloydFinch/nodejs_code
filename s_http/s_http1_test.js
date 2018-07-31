var http = require('http');

var port = 3389;

var server = http.createServer(function(req,rep){
	console.log(req + '');
	rep.writeHead(200,{'Content-Type':'text/plain'});
	rep.write('hello,world\n');
	rep.end('hello end');

});

server.listen(port);
console.log('server start on: ', port);





