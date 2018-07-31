
var http = require('http');

var port = 8080;

var server = http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('end of server\n');
});

server.listen(port)



