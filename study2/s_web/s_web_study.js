
var http = require('http')
var fs = require('fs');

var port = 3389;

var server = http.createServer(function(request,response){

	fs.readFile('../study.html',function(err,data){
		
		if(err){
			console.error(err);
			response.writeHead(404,{'Content-Type':'text/html;charset=utf-8'});
		}else{
			response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
			response.write(data.toString());
		}
		
		response.end();
	
	});
	
});


server.listen(3389);
console.log('server running on port:', 3389);



























