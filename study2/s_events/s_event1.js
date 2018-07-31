var events = require('events');

var emitter = new events.EventEmitter();

var downloadEventHandler = function(){
	console.log('start download...');
	emitter.emit('downloadFinishEvent');
}


var downloadFinishEventHandler = function(){
	console.log('download finish..');
}


emitter.on('downloadEvent',downloadEventHandler);

emitter.on('downloadFinishEvent',downloadFinishEventHandler);


emitter.emit('downloadEvent');




