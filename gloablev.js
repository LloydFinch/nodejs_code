
//输出全局变量_filename的值(路径)
//console.log('_filename: ' + _filename);

//输出目录
//console.log('_dirname: ' + _dirname);

//设置计时器，只会执行一次
function sayHello(){
	console.log('hello world!');
}
var timer = setTimeout(sayHello,2000);

//清除计时器
clearTimeout(timer);

//设置定时器,会循环执行
var interval = setInterval(sayHello,1000);

//清除定时器
clearInterval(interval);

console.log('1+1=%d',1+1);

console.trace();

//这是一对,开始计时
console.time('time');
console.timeEnd('time');
//这是一对,计时结束,打印出两个time之间消耗的时间

console.info('info: app execute finish!');

console.log(process.version);
console.log(process.versions);
console.log(process.config);
console.log(process.pid);
console.log(process.arch);
console.log(process.platform);

//输出到终端
process.stdout.write('hello world\n');
process.argv.forEach(function(val,index,array){
	console.log(index + ':' + val);
});

//程序退出时触发
process.on('exit',function(code){
	//以下代码永远不会执行,因为程序已退出
	setTimeout(function(){
		console.log('this code will not execute forever!');
	},0);

	console.log('app excute finish: '+ code);
});




