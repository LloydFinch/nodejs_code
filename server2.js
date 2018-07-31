var http = require('http');
var url = require('url');

function start(route){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' received.');
		
		route(pathname);		

		response.writeHead(200,{'Content-Type':'text/plain'});
		response.write('hello android');
		response.end();
	}

	http.createServer(onRequest).listen(8100);
	console.log('server running...');
}

exports.start = start; 
