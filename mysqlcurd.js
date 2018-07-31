var mysql = require('mysql');

//定义连接属性
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'venn2devloper',
	port : '3306',
	database: 'study'
});

//连接
connection.connect();

//插入数据
var insertSql = 'insert into user(id,name,sex,age,address) values (10001,?,?,?,?)';
var insertSqlValues = ['lloydfinch','man',26,'beijing'];
connection.query(insertSql,insertSqlValues,function(err,result){
	if(err){
		return console.error('[insert error] - ' + err.message);
	}
	
	console.log('insert id: ' + result);
	console.log('-----insert into user data sucess!-----');
});

//查询数据
var selectSql = 'select * from user';
connection.query(selectSql,function(err,result){
	if(err){
		return console.log('[select error] - ' + err.message);
	}
	console.log('-----select from user-----');
	console.log(result);
});

//更新数据
var updateSql = 'update user set name = ?,address = ? where id = ?';
var updateSqlValues = ['tom','indonesia',10001];
connection.query(updateSql,updateSqlValues,function(err,result){
	if(err){
		return console.error('[update error] - ' + err.message);
	}
	console.log('update affected: ' + result.affectedRows); 
    console.log('----update user data-----');
});

//删除数据
var deleteSql = 'delete from user where id = 10001';
connection.query(deleteSql,function(err,result){
	if(err){
		return console.error('[delete error] - ' + err.message);
	}
	console.log('delete affected: ' + result.affectedRows);
	console.log('-----delete data from user-----');
});

//断开连接
connection.end();








