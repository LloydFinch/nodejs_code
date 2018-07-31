
var http = require('http');
var os = require('os');
var ipAddress = os.networkInterfaces().en0[1].address; 

const PORT = 8081;

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	var data = JSON.stringify({code:200,data:{'message':'hello world!'}});
	res.write(data);
	res.end();
}).listen(PORT);

console.log('server start in %s:%d',ipAddress,PORT);
