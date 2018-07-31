
var http = require('http');

var port = 8080;

var json = {
	id : '100000011',
	name : 'lloyd',
	sex : '1'
}

var server = http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write(JSON.stringify(json));
	response.end();	

});


server.listen(port);

console.log('server running in ',port,'...');














