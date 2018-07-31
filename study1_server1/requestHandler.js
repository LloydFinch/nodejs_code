var exec = require('child_process').exec;
var fs = require('fs');
var queryString = require('querystring');

function start(response,postData){
	console.log('requestHandler.start was called!');
	response.writeHead(200,{'Content-Type':'text/plain'});
	var data = JSON.stringify({code:200,data:{'id':'10001','name':'tom'}});
	response.write(data);//params only be json or buffer
	response.end();
}

function upload(response,postData){
	console.log('requestHandler.upload was called!');
	response.writeHead(200,{'Content-Type':'text/plain'});
	var data = queryString.parse(postData).value;
	console.log(data);
	response.write('you\'ve sent: ' + data);
	response.end();
}

function init(response,postData){
	var pathname = __dirname + '/public/index.html';
	fs.readFile(pathname,function(err,data){
		if(err){
			return console.error(err);
		}
		response.writeHead(200,{'Content-Type':'text/html'});
		response.end(data);
	});
}

exports.start = start;
exports.upload = upload;
exports.init = init;
