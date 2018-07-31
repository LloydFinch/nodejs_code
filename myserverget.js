var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs');
var postHTML =
 '<html><head><meta charset="utf-8"><title> apk download  </title></head>' +
 '<body>' +
 '<form method="get">' +
 '<input type="submit" value="download">' +
 '</form>' +
 '</body></html>';
console.log('server start......');
http.createServer(function(request,response){
    var params = url.parse(request.url,true).query;
	var fileName = 'downlaod.txt';
 	var filePath = './download.txt';
 	var stats = fs.statSync(filePath); 
 	if(stats.isFile()){
  		response.writeHeader(200,{
   			'Content-Type': 'application/octet-stream',
   			'Content-Disposition': 'attachment; filename='+fileName,
   			'Content-Length': stats.size
  		});
		fs.createReadStream(filePath).pipe(response);
		response.end();
		console.log('download file from server!');
	}else{
		console.log('server error!');
		response.write('server error!');
		response.end(404);
	}
 }).listen(8100);
  

