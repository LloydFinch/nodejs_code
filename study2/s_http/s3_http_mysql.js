
var http = require('http');
var mysql = require('mysql');

var port = 8080;
var connObj = {
	host : 'localhost',
	database : 'lflc',
	user : 'root',
	password : 'venn2devloper'
};

var conn = mysql.createConnection(connObj);
conn.connect();

var json = [];

var querySql = 'select * from student where _id > 0';
conn.query(querySql,function(error,results,fileds){
	if(error){
		console.error(error);
		return;
	}

	json = results;		

})
conn.end();

var server = http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write(JSON.stringify(json));
	response.end();	

});


server.listen(port);

console.log('server running in ',port,'...');














