var http = require('http');


var port = 3389;

var data = 'fuck sky\n fuck ground\n fuck air';

var server = http.createServer(function(req,rep){

	rep.writeHead(200,{'Content-Type':'text/plain'});
	rep.write(data);
	rep.end();

});


server.listen(port);
console.log('server run on port: ',port);


