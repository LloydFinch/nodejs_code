
function route(handle,pathname,response,request){
	console.log('route to ' + pathname);
	
	if(typeof handle[pathname] === 'function'){
		 handle[pathname](response,request);
	}else{
		console.log('no request handler found for ' + pathname);
		response.writeHead(200,{'Content-Type':'text/plain'});
		response.write('404 not Found');
		response.end();
	}
}

exports.route = route;




