
//入口文件

var http = require('http');
var os = require('os');
var url = require('url');
var querystring = require('querystring');
var router = require('./router');
var urlquery = require('./urlquery');

const PORT = 8081;
const IP = os.networkInterfaces().en0[1].address;

var server = http.createServer(function(req,res){
	var reqpath = url.parse(req.url).pathname;
	console.log('request path: ' + reqpath);
	var query = url.parse(req.url).query;//name=123(非对象)
	console.log(query);
	console.log('name: ' + urlquery.queryString(query,'name'));
	console.log('id: ' + urlquery.queryString(query,'id'));
	console.log('sex: ' + urlquery.queryString(query,'sex'));
	console.log('position: ' + urlquery.queryString(query,'position'));
	//JSON.stringify(obj);JSON.parse(str);
	//var aa = url.parse(req.url);
	//console.log(aa);
	//var values = querystring.parse(aa);
	//console.log(values);
	if(reqpath){
		switch(req.method){
			case 'GET':
				//TODO 解析参数
				var params = '';
				var data = router.route(reqpath);
				res.writeHead(200,{'Content-Type':'text/plain;charset="utf8"'});
				res.write(data);
				res.end();
			break;
		
			case 'POST':
				//TODO 解析参数
				var params = ''
				var data = router.route(reqpath);
				//TODO 根据不同的请求内容写入不同的响应头,暂时默认为文本内容
				res.writeHead(200,{'Content-Type':'text/plain;charset="utf8"'});
				res.write(data);
			break;
		
			default:
				res.writeHead(200,{'Content-Type':'text/plain;charset="utf8"'});
				res.write('illegal request!');
				res.end();
			break;
		}
	}else{
		 res.writeHead(200,{'Content-Type':'text/plain;charset="utf8"'});
		 res.write('illegal request! path is null!');
		 res.end();	
	}
});

server.listen(PORT);
console.log('server start in %s:%d',IP,PORT);
