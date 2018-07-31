
//创建一个长度为10,用0填充的Buffer
const buf1 = Buffer.alloc(10);

//创建一个长度为10,用1填充的Buffer
const buf2 = Buffer.alloc(10,1);

//常见一个长度为10，可能含有旧数据的Buffer
//速度比Buffer.alloc()更快
const buf3 = Buffer.allocUnsafe(10);

//创建一个包含1、2、3的Buffer
const buf4 = Buffer.from([1,2,3]);

//创建一个包含UTF-8字节(默认)的Buffer
const buf5 = Buffer.from('test');

//创建一个包含Latin-1字节的Buffer
const buf6 = Buffer.from('test','latin1');

const buf = Buffer.alloc(256);
//写入缓冲区,从buf的0开始,写入1个字节,size:实际写入的数据
var size = buf.write('hello',0,1,'utf-8');
console.log('write in buf: '+ size);

const buffer = Buffer.alloc(256);
var len = buffer.write('hello android');
console.log('write in buffer:'+ len);

//从缓冲区读取数据
//编码 utf-8,从0开始读到10
var content = buffer.toString('utf-8',0,10);
console.log('read from buffer: '+ content);

//buffer转换为json对象
var buffer1 = Buffer.from('hello node');
var json = buffer1.toJSON(buffer1);
console.log(json);

//缓冲区合并
var buffer2 = Buffer.from('hello');
var buffer3 = Buffer.from(' ');
var buffer4 = Buffer.from('android');
var buffer5 = Buffer.concat([buffer2,buffer3,buffer4]);
console.log('after concat buffer: ' + buffer5.toString());

//缓冲区合并，限制合并后的最大长度为10
var buffer6 = Buffer.concat([buffer2,buffer3,buffer4],10);
console.log('concat by limit size: '+buffer6.toString());

//缓冲区比较
var oldBuf = Buffer.from('abc');
var newBuf = Buffer.from('abcd');
//result<0:oldBuf在newBuf之前,依次类推
var result = oldBuf.compare(newBuf);
if(result<0){
	console.log(oldBuf+'在'+newBuf+'之前');
}else if(result==0){
  	console.log(oldBuf+'与'+newBuf+'相同');
}else{
	console.log(oldBug+'在'+newBuf+'之后');
}

//拷贝缓冲区
var buff1 = Buffer.from('abcdefg');
var buff2 = Buffer.from('ABC');
//将buff2拷贝到buff1上，从buff1的2号位置开始替换
//buff2.copy(buff1,2);
//从buff2的0开始拷贝到1，拷贝到buff1上,从buff1的2位置开始替换
buff2.copy(buff1,2,0,1);
console.log(buff1.toString());

//缓冲区裁剪
var bbuf1 = Buffer.from('android');
//截取bbuf1的0到2内容
var bbuf2 = bbuf1.slice(0,2);
console.log('bbuf2 content: ' + bbuf2.toString());

//获取缓冲区的长度
var bbff3 = Buffer.from('hello android!');
var length = bbff3.length;
console.log('bbff3.length = ' + length);

