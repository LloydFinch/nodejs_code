var events = require('events');

//定义事件发射器
var eventEmitter = new events.EventEmitter();

//定义connection事件接收处理器
var connectHandler = function connected(){
	console.log('received connect..');

	console.log('send received');
	eventEmitter.emit('data_received');
}

//绑定事件‘connection’的处理者为connectHandler
eventEmitter.on('connection',connectHandler);

//定义received事件接收处理器
var receivedHandler = function received(){

	console.log('received received..');
}

//绑定事件'data_received'的处理者为receivedHandler
eventEmitter.on('data_received',receivedHandler);

//发射connection事件
console.log('send connection..');
eventEmitter.emit('connection');




















