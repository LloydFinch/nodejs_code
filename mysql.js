
var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'venn2devloper',
	database : 'lflc'
});

connection.connect();

connection.query('select 1 + 1 as solution',function (err,results,fields){
	if(err){
		throw err;
	}
	console.log('the solution is : ',results[0].solution);
});
