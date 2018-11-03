
var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};

function listen(server){
	console.log('[ChatServer] listen...');
	io = socketio.listen(server);
	io.set('log level',1);
	io.sockets.on('connection', function(socket){
		console.log('[ChatServer] connecting...');
		//分配昵称
		guestNumber = assignGuestName(socket,guestNumber,nickNames,namesUsed);
		//添加到大厅
		joinRoom(socket,'Lobby');
		//处理用户消息
		handleMessageBroadcasting(socket,nickNames);
		//更改昵称事件
		handleNameChangeAttempts(socket,nickNames,namesUsed);
		//处理聊天室变更消息
		handleRoomJoining(socket);
		//监听获取聊天室列表消息
		socket.on('rooms',function(){
			socket.emit('rooms',io.sockets.manager.rooms);
		});
		//监听断开连接消息
		handleClientDisconnection(socket,nickNames,namesUsed);
	});
}

//分配昵称
function assignGuestName(socket,guestNumber,nickNames,namesUsed){
	var name = 'Guest' + guestNumber;
	nickNames[socket.id] = name;
	socket.emit('nameResult',{success:true,name:name});
	namesUsed.push(name);
	return guestNumber + 1;
}

//进入房间的逻辑
function joinRoom(socket,room){
	socket.join(room);
	currentRoom[socket.id] = room;
	socket.emit('joinResult',{room:room});
	socket.broadcast.to(room).emit('message',
		{text: nickNames[socket.id] + ' has joined ' + room + '.'});
	var usersInRoom = io.sockets.clients(room);
	if(usersInRoom.length > 1){
		var usersInRoomSummary = 'Users currently in ' + room + ': ';
		for(var index in usersInRoom){
			var userSocketId = usersInRoom[index].id;
			if(index > 0){
				usersInRoomSummary += ', ';
			}
			usersInRoomSummary += nickNames[userSocketId];
		}
	}
	
	usersInRoomSummary += '.';
	socket.emit('message', {text: usersInRoomSummary});
}

//处理昵称相关的请求
function handleNameChangeAttempts(socket,nickNames,namesUsed){
	socket.on('nameAttempt', function(name){
		if(name.indexOf('Guest') == 0){
			socket.emit('nameResult', {success:false,message:'Names cannot begin with "Guest"'});
		}else{
			if(namesUsed.indexOf(name) == -1){
				var previousName = nickNames[socket.io];
				var previousNameIndex = namesUsed.indexOf(previousName);
				namesUsed.push(name);
				nickNames[socket.id] = name;
				delete namesUsed[previousNameIndex];
				socket.emit('nameResult',{success:true,name:name});
				socket.broadcast.to(currentRoom[socket.id]).emit('message',
					{text: previousName + 'is now konwn as ' + name + '.'});
			}else{
				socket.emit('nameResult', {success:false,message:'That name is already in use'});
			}
		}
	});
}

//处理聊天内容
function handleMessageBroadcasting(socket){
	socket.on('message',function(message){
		socket.broadcast.to(message.room).emit('message',{text: nickNames[socket.id] + ': ' + message.text});	
	});
}

//房间变动逻辑
function handleRoomJoining(socket){
	socket.on('join',function(room){
		socket.leave(currentRoom[socket.id]);
		joinRoom(socket,room.newRoom);
	});
}

//处理断开逻辑
function handleClientDisconnection(socket){
	socket.on('disconnect',function(){
		var nameIndex = namesUsed.indexOf(nickNames[socket.id]);
		delete namesUsed[nameIndex];
		delete nickNames[socket.id];
	});
}

exports.listen = listen;



















