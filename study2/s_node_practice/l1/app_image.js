var http = require('http');
var fs = require('fs');
var port = 3389;

var server = http.createServer(function(request,response){
	var path = './image/test.png'
	response.writeHead(200,{'Content-Type':'image/png'});
	//从path读取数据导入到response中
	fs.createReadStream(path).pipe(response);
	response.end();
});


server.listen(port);
console.log('server starting on port ' + port);

