var http = require('http');

var data = '{\'data\':\'hello world\'}';
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end(data);
}).listen(8100);

console.log('Server running at http:127.0.0.1:8100/');
