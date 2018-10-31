
const websocket = require('ws');

const ChatServer = websocket.Server;

const wss = new ChatServer({
	port: 3030
});

wss.on('connection',function(ws){
	console.log('[server] connection');
	ws.on('message',function(message){
		console.log(`[server] received: ${message}`);
		let rep = `server response for ${message}`;
		ws.send(rep,function(err){
			console.log(`server send ${rep}`);
			if(err){
				console.log(`[server] error: ${err}`);
			}
		});
	});
	
	ws.on('close',function(){
		console.log('[client] close');
	});
});









