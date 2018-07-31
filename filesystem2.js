
var fs = require('fs');

var buf  = new Buffer(1024);

console.log('准备打开文件...');
//'w+':文件不存在则创建
fs.open('input.txt','w+',function(err,fd){
	if(err){
		return console.error(err);
	}
	
	console.log('文件打开成功!');
	console.log('截取10字节后的文件内容');
	
	//写一些内容
	var data = 'hello android'
	fs.writeFileSync('input.txt',data,function(err){
		if(err){
			return console.error(err);
		}
		console.log('write file: ' + data);
	});
	
	//截取文件,截取长度为10
	fs.ftruncate(fd,10,function(err){
		if(err){
			return console.error(err);
		}
		console.log('文件截取成功!');
		console.log('读取截取的文件');
		
		//读取截取的文件
		fs.read(fd,buf,0,buf.length,0,function(err,bytes){
			if(err){
				return console.error(err);
			}
			
			if(bytes > 0){
				console.log(buf.slice(0,bytes).toString());
			}
			
			//关闭文件
			fs.close(fd,function(err){
				if(err){
					return console.error(err);
				}
				console.log('close file success!');
			});
		});
	});
	//删除文件
    console.log('删除input.txt');
    fs.unlink('input.txt',function(err){
        if(err){
            return console.log(err);
        }
        console.log('delete file input.txt success!');
    });
});

//目录相关
var dir = '/Users/lloydfinch/venn/workspace/nodejs/test/dir/';

//删除目录
 fs.rmdir(dir,function(err){
      if(err){
          return console.log(err);
      }
      console.log('delete dir %s success',dir);
 });

//创建目录
fs.mkdir(dir,function(err){
	if(err){
		return console.error(err);
	}
	console.log('create dir success!');
});

//读取目录
fs.readdir(dir,function(err,files){
	if(err){
		return console.error(err);
	}
	
	files.forEach(function(file){
		console.log(file);
	});
});

//删除目录
fs.rmdir(dir,function(err){
	if(err){
		return console.log(err);
	}
	console.log('delete dir %s success',dir);
});
