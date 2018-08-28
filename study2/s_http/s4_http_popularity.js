var http = require('http');
var mysql  = require('mysql');

var connObj = {
	
	host : 'localhost', 
	database : 'work',	
	user : 'root',
	password : 'venn2devloper'
}

var port = 3389;

var server = http.createServer(function(req,rep){
	
	//console.log('request = ' , req.headers);

	var conn = mysql.createConnection(connObj);	
	conn.connect();	
	var sql = 'select * from popularity';
	conn.query(sql,function(error,results,fileds){
		if(error){
			console.error(error);
			return;
		}
		var list = Array();
		if(results){
			for(index in results){
				var bean = results[index];
				list.push({
					order :bean.m_order,
					name : bean.name,
					headImg : bean.headImg,
					popularity : bean.popularity
					});
			}
		}
		var json = {popularities : list}
		console.log('list size = ',list.length);
		rep.writeHead(200,{'Content-Type':'text/plain'});
		rep.write(JSON.stringify(json));
		rep.end();
	});	

	conn.end();	
});

server.listen(port);
console.log('server running on port ', port);































