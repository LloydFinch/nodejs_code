
var events = require('events');

var emitter = new events.EventEmitter();

const SendEvents = 'SendEvents';
emitter.on(SendEvents,function(tag){

	console.log('trigger events ', SendEvents);
	console.log('tag is ', tag);
});

console.log('emit events ',SendEvents);
emitter.emit(SendEvents,'tag test');





