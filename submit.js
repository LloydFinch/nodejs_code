var http = require('http');
var querystring = require('querystring');

//提交表单的网页数据
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function(request,response){

	var body = '';
	//读取请求信息
	request.on('data',function(chunk){
		body += chunk;
	});
	request.on('end',function(){
		//解析请求信息
		body = querystring.parse(body);
		response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
		if(body.name&&body.url){//判断输入数据是否为空
			response.write('net name: ' + body.name);
			response.write('<br>');
			response.write('url: ' + body.url);
		}else{
			response.write(postHTML);
		}
		response.end();
	});
}).listen(8200);
