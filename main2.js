var events = require('events');
var CONNECTION = 'connection';
var DATA_RECEIVED = 'data_received';

//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected(){
	console.log('连接成功!');

	//发送事件
	eventEmitter.emit(DATA_RECEIVED);
}
//绑定事件
eventEmitter.on(CONNECTION,connectHandler);

//匿名绑定事件
eventEmitter.on(DATA_RECEIVED,function(){
	console.log('数据接收成功!');
});

//发送事件
eventEmitter.emit(CONNECTION);

console.log('程序执行完毕');
