
var mysql = require('mysql');


var connObj = {
	host : 'localhost',
	database : 'lflc',
	user : 'root',
	password : 'venn2devloper'
};
var conn = mysql.createConnection(connObj);
conn.connect();

var insertSql = 'insert into diary(name,time) values(\'saturday\',\'2018-07-16\')';
conn.query(insertSql,function(error,results){
	
	if(error){
		console.log('error occur when insert, error is',error);
		return;
	}	

	console.log('result is: ', results);
});


conn.end();



