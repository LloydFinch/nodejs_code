var fs = require('fs');
var data = 'hello android,测试测试\n';

//创建写入流,写入到output.txt中
var writeStream = fs.createWriteStream('output.txt');

//写入数据
writeStream.write(data,'UTF8');

//标记文件末尾
writeStream.end();

//监听流事件
//data事件只用读入流监听
writeStream.on('data',function(chunk){
	console.log('data' + chunk);
});

//end事件只需要读入流监听
writeStream.on('end',function(){
	console.log('end');
});

//finish事件只需要写入流监听，这里不可缺少
writeStream.on('finish',function(){
	console.log('write finish!');
});

writeStream.on('error',function(err){
	console.log('error, info: '+err.stack);
});

console.log('app execute finish!');

