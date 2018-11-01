
var exec = require('child_process').exec;
var querystring  = require('querystring');
var fs = require('fs');
var formidable = require('formidable');


//引入response进行异步回调
function start(response,request){
	console.log('request handler start was called');
	//非阻塞操作
	//用node.js窒息女一个shell命令，获取当前目录下的所有文件
	var body = '<html>'+
    	'<head>'+
    	'<meta http-equiv="Content-Type" content="text/html; '+
    	'charset=UTF-8" />'+
    	'</head>'+
    	'<body>'+
    	'<form action="/upload" enctype="multipart/form-data" method="post">'+
    	'<input type="file" name = "upload" multiple = "multiple"/>'+
    	'<input type="submit" value="upload" />'+
    	'</form>'+
    	'</body>'+
    	'</html>';
	

	response.writeHead(200,{'Content-Type':'text/html'});
	response.write(body);
	response.end();
}

function upload(response,request){
	console.log('request handler upload was called');

	var form = new formidable.IncomingForm();
	form.parse(request,function(error,fields,files){
		try{
			fs.renameSync(files.upload.path,'./tmp/test.png')
			response.writeHead(200,{'Content-Type':'text/html'});
			response.write('received image:<br>');
			response.write('<img src = "/show" />');
			response.end();
		}catch(err){
			console.log(err);
		}
	});	
}

function show(response,request){
	console.log('request handler show was called');
	var dir = './tmp/test.png';
	fs.readFile(dir,'binary',function(error,file){
		if(error){
			response.writeHead(500,{'Content-Type':'text/plain'})
			response.write(error +'\n');;
			response.end();
		}else{
			response.writeHead(200,{'Content-Type':'image/png'});	
			response.write(file,'binary');
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;








