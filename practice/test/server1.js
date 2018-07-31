
var http = require('http');
var os = require('os');

const PORT = 8080;
var ipAddress = os.networkInterfaces().en0[1].address;

var server = http.createServer(function(req,res){
	res.writeHeader(200,{'Content-Type':'text/plain;charset="utf-8"'});
	res.write('hello world!');
	res.end();
});

server.listen(PORT);
console.log('server run on %s:%d',ipAddress,PORT);










