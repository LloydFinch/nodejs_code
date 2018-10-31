var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var app = express();

var address = 'https://cnodejs.org/';

app.get('/',function(req,rep){
	
	//抓取数据
	superagent.get(address)
	.end(function(err,res){
		if(err){
			console.log(`[server] error: $err`);

			return next(err);
		}
		
		var $ = cheerio.load(res.text);
		var items = [];
		$('#topic_list .topic_title').each(function(index,element){
			var $element = $(element) ;
			items.push({
				title : $element.attr('title'),
				href : $element.attr('href')
			});
		});
		
		rep.send(items);
	});
});


app.listen(3000,function(){
	console.log('app listening at port 3000');
});


















