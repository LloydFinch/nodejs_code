var mysql = require('mysql');
var connObj = {
	host : 'localhost',
	database : 'lflc',
	user : 'root',
	password : 'venn2devloper'

};

var conn = mysql.createConnection(connObj);

conn.connect();

var deleteSql = 'select * from diary where _id > 2';
conn.query(deleteSql,function(error,results,fileds){
	if(error){
		console.error(error);
		return;
	}
	console.log('select from lflc, fileds is : ', fileds);
	console.log('select from lflc, result is : ', results);
	console.log(results[0]._id);
	console.log(results[0].name);
	console.log(results[0].time + '');
});

conn.end();

























