var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

//聊天服务器。基于socket的
var chatServer = require('./lib/chat_server');

//侦听端口号
const port = 3389;

//用来保存缓存数据
var cache = {};

//处理404问题
function send404(response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('404, resource not found');
	response.end();
}

//处理文件类型
function sendFile(response,filePath,fileContents){
	//这句比较cow b，涉及了两个api，往死里背
	response.writeHead(200,{'Content-Type':mime.getType(path.basename(filePath))});
	response.end(fileContents);
}

//缓存逻辑处理
function saveStatic(response,cache,absPath){
	console.log('saveStatic path = ' + absPath);
	if(cache[absPath]){
		//混存中存在，直接返回	
		sendFile(response, absPath, cache[absPath]);
	}else{
		//缓存中没有，需要从本地读取
		fs.exists(absPath,function(exists){
			if(exists){
				//文件存在，从本地读取
				fs.readFile(absPath,function(err,data){
					if(err){
						send404(response);	
					}else{
						//保存到缓存
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				});
			}else{
				//文件不存在
				send404(response);
			}
		})
	}
}

//创建server
var server = http.createServer(function(request,response){
	var filePath = '';
	if(request.url == '/'){
		filePath = 'public/index.html';
	}else{
		filePath = 'public' + request.url;
	}
	var absPath = './' + filePath;
	
	saveStatic(response,cache,absPath);
});

//开始监听
server.listen(port, function(){
	console.log('Server listening on port ' + port);
});

//聊天服务器监听http服务器
chatServer.listen(server);










