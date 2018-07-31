
var util = require('util');

//基类
function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('hello ' + this.name);
	}
}

//定义在原型上的属性，可以被继承
Base.prototype.showName = function(){
	console.log(this.name);
}

//子类
function Sub(){
	this.name = 'sub';
}

//让Sub继承Base
util.inherits(Sub,Base);

//测试继承关系
var base = new Base();
base.sayHello();
base.showName();
console.log(base);

var sub = new Sub();
//sub.sayHello();//无此方法,因为继承不到
sub.showName();
console.log(sub);

//打印base对象；显示更多内容，不限制层级，带有颜色
console.log(util.inspect(base,true,null,true));

//判断sub是否是数组
var result = util.isArray(sub);
//判断sub是否是正则表达式
var r1 = util.isRegExp(sub);
//判断sub是否是日期
var r2 = util.isDate(sub);
//判断sub是否是错误对象
var r3 = util.isError(sub);

console.log('app execute finish!');


