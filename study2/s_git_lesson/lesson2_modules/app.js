//学习使用package.json管理项目
//学习req.query的用法

var express = require('express');

var utility = require('utility');

var app = express();

app.get('/',function(req,rep){
	var q = req.query.q
	var md5Q = utility.md5(q);
	rep.send(md5Q);
});

app.listen(3000,function(){
	console.log('app listening at port 3000');
});






