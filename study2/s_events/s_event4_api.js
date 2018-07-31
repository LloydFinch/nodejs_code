
var events = require('events');

var emitter = new events.EventEmitter();

const connectEvent = 'connection';

//listener 1
var listener1 = function(){
	console.log('listener1 excute');
}

//listener 2
var listener2 = function(){
	console.log('listener2 excute');
}


//addListener1
emitter.addListener(connectEvent,listener1);

//onListener2
emitter.on(connectEvent,listener2);

var listenerCount = emitter.listeners(connectEvent);
console.log('listeners:',listenerCount);

var count = events.EventEmitter.listenerCount(emitter,connectEvent);
console.log('listenerCount:', count);

//emit event
emitter.emit(connectEvent);

emitter.removeListener(connectEvent,listener1);
console.log('remove listener1');


emitter.emit(connectEvent);

var count2 = emitter.listeners(connectEvent);
console.log('conut2: ',count2);


console.log('app execute finish');













