const WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:3030');

ws.on('open',function(){
	console.log('[client] open');
	ws.send('hello, this is client');
});	

ws.on('message',function(message){
	console.log(`[client] receiced: ${message}`);
});








