
var mysql = require('mysql');



var connectionObj = {
	host : 'localhost',
	database : 'lflc',
	user : 'root',
	password : 'venn2devloper'	
}

var connection = mysql.createConnection(connectionObj);

connection.connect();

var sql = 'select * from student';
connection.query(sql,function(error,results,fileds){

	if(error){
		console.error(error);
		throw error;
	}
	
	console.log(results);
});

connection.end();



