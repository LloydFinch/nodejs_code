
var http = require('http');
var fs = require('fs');

var port = 3389;


var server  = http.createServer(function(req,rep){
	
	fs.readFile('index.html',function(err,data){
		if(err){
			console.err(err);
			rep.writeHead(404,{'Content-Type':'text/html'});
		}else{
			rep.writeHead(200,{'Content-Type':'text/html'});
			rep.write(data.toString());
		}
		
		rep.end();
	});
});



server.listen(port);
console.log('server runing on port: ', port);























