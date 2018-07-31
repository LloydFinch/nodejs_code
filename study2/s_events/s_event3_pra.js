
var events = require('events');

var emitter = new events.EventEmitter();

const MusicStartEvent = 'MusicStartEvent';

const MusicStartHandler = function(event){
	
	console.log('music start ', event);
}

emitter.on(MusicStartEvent,MusicStartHandler);

//if music has start
console.log('music has start, send start event');
var startEvent = {
	id : '10010',
	name: 'beat it',
	author: 'lloyd'
}
emitter.emit(MusicStartEvent,startEvent);






















