
function divEscapedContentElement(message){
	return $('<div></div>').text(message);
}

function divSystemContentElement(message){
	return $('<div></div>').html('<i>' + message + '</i>');
}

function processUserInput(chatApp,socket){
	var message = $('#send-message').val();
	console.log('[ChatUI] processUserInput: ' + message);
	var systemMessage;
	
	if(message.charAt(0) == '/'){
		systemMessage = chatApp.processCommand(message);
		console.log('[ChatUI] call Chat.processCommand: ' + message);
		if(systemMessage){
			$('#messages').append(divSystemContentElement(systemMessage));
		}
	}else{
		chatApp.sendMessage($('#room').text(), message);
		$('#messages').append(divEscapedContentElement(message));
		$('#messages').scrollTop($('#messages').prop('scrollHeight'));
	}
	
	$('#send-message').val('');
}


var socket = io.connect();

$(document).ready(function(){
	console.log('[ChatUI] ready...');
	var chatApp = new Chat(socket);
	socket.on('nameResult',function(result){
		var message;
		
		if(result.success){
			message = 'You are now known as ' + result.nam + '.';
		}else{
			message = result.message;
		}
		$('#message').append(divSystemContentElement(message));
	});

	socket.on('joinResult',function(result){
		$('#room').text(result.room)
		$('#messages').append(divSystemContentElement('Room changed'));
	});

	socket.on('message',function(message){
		var newElement = $('<div></div>').text(message.text);
		$('#messages').append(newElement);
	});

	socket.on('rooms',function(rooms){
		$('#room-list').empty();
		for(var room in rooms){
			room = room.substring(1,room.length);
			if(room != ''){
				$('#room-list').append(divEscapedContentElement(room));
			}
		}
		
		$('#room-list div').click(function(){
			chatApp.processCommand('/join ' + $(this).text());
			$('#send-message').focus();
		});
	});
	
	setInterval(function(){
		socket.emit('rooms');
		console.log('[ChatUI] emit rooms');
	},1000);
	
	$('#send-message').focus();
	
	$('#send-button').click(function(){
		console.log('[ChatUI] submit called');
		processUserInput(chatApp,socket);
		return false;
	});
});


























