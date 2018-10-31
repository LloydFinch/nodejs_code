
var http = require('http');

var port = 3000;

var server = http.createServer(function(req,rep){
	rep.writeHead(200,{'Content-Type':'text/plain'});
	rep.write('hello, world');
	rep.end();
});

server.listen(port);













