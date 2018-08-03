
var http  = require('http');

var options = {
	
	host : 'localhost',
	port : '3389',
	path : '/birthday.html'
};

var callback = function(response){
	
	var body = '';
	response.on('data',function(data){
		body+=data;
	});
	
	response.on('end',function(){
		console.log(body);
	});
};


var request = http.request(options,callback);

request.end();































