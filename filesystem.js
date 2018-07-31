
var fs = require('fs');

//异步读取
fs.readFile('input.txt',function (err,data){
	if(err){
		return console.error(err);
	}
	console.log('read file async: ' + data.toString());
})

//同步读取
var data = fs.readFileSync('input.txt');
console.log('read file sync: ' + data.toString());

console.log('app excute finish!');

//打开文件
console.log('准备打开文件...');
//以读写模式打开input.txt
fs.open('input.txt','r+',function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log('文件打开成功');
});

//获取文件信息
fs.stat('input.txt',function(err,stats){
	if(err){
		return console.log(err);
	}
	
	console.log(stats);
	console.log('isFile: ' + stats.isFile());
	console.log('isDirectory: ' + stats.isDirectory());
	
});

//写入文件
console.log('准备写入文件...');
var content = '写入的内容!'
fs.writeFile('input.txt',content,function(err){
	if(err){
		return console.error(err);
	}

	console.log('write data into file finish!');
	
	//读取写入的数据	
	console.log('read write data from input.txt');
	fs.readFile('input.txt',function(err,data){
		if(err){
			console.error(err);
		}
		console.log('read file async: ' + data.toString());
	});
});

//读取文件
var buffer = new Buffer(1024);

console.log('准备打开已存在的文件...');
fs.open('input.txt','r+',function(err,fd){
	if(err){
		return console.error(err);
	}

	console.log('文件打开成功!');
	console.log('准备读取文件...');
	
	//读取文件到buffer中,从0开始写入，读取的字节数为buffer.length,从0开始读取
	fs.read(fd,buffer,0,buffer.length,0,function(err,bytes){
		if(err){
			return console.error(err);
		}
		console.log(bytes + '字节被读取');
		
		//输出读取的字节
		if(bytes > 0 ){
			console.log(buffer.slice(0,bytes).toString());
		}
	});

	//关闭文件
	fs.close(fd,function(err){
		if(err){
			console.log(err);
		}
		console.log('close file success!');
	});
});





