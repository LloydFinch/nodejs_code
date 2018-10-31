
var async = require('async');

var concurrencyCount = 0;

var fetchUrl = function(url,callback){
	//伪造抓取时间
	var delay = parseInt((Math.random()*10000000 % 2000),10);
	concurrencyCount ++;
	console.log('现在的并发数是', concurrencyCount, ', 正在抓取的是', url, '耗时' + delay + '毫秒');
	setTimeout(function(){
		concurrencyCount--;
		callback(null,url + ' html content');

	},delay);
};

//构造url
var urls = [];
for(var i = 0; i < 30; i++){
	//这里往死里整他娘的百度
	urls.push('http://www.baidu.com');
}

async.mapLimit(urls, 5, function(url,callback){
	fetchUrl(url,callback);	
}, function(err,result){
	console.log('final:');
	console.log(result);
});






