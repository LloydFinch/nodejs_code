var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(arg1,arg2){
	console.log('listener1',arg1,arg2);
}

var listener2 = function listener2(arg1,arg2){
	console.log('listener2',arg1,arg2);
}

//绑定监听器
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

//获取监听器数量
var eventListenerNumbers = events.EventEmitter.listenerCount(eventEmitter,'connection'); 
console.log('eventEmitter注册的connection监听器个数为:'+eventListenerNumbers);

eventEmitter.emit('connection','test1',100);

//移除监听器
eventEmitter.removeListener('connection',listener1);
console.log('移除eventEmitter的listener1监听器');

eventListenerNumbers = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log('eventEmitter注册的connection监听器个数为:'+eventListenerNumbers);

eventEmitter.emit('connection','test2',102);
//移除所有监听器

eventEmitter.removeAllListeners('connection');
eventEmitter.removeAllListeners();

eventEmitter.emit('connection','test3',103);

console.log('程序执行完毕');
