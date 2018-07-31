var fs = require('fs');

var data = '';

//创建可读流
var readerStream = fs.createReadStream('files.txt');

//设置编码
readerStream.setEncoding('UTF-8');

//监听流事件
//data事件，当有数据可读时触发
readerStream.on('data',function(chunk){
	console.log('data, data: ' + chunk);
	data += chunk;
});

//end事件，没有更多的数据时触发
readerStream.on('end',function(){
	console.log('end, data is: ' + data);
})

//error事件，出错时触发
readerStream.on('error',function(err){
	console.log('error, info: ' + err.stack);
})

//finish事件，所有数据已被写入到底层系统时触发
readerStream.on('finish',function(){
	console.log('finish');
});

console.log('app execute finish!');
