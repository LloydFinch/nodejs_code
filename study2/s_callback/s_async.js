
var fs = require('fs');

var fileName = 'input.txt';

fs.readFile(fileName,function(error,data){

	if(error){
		return concole.error(error);
	}
	console.log('read file result', data.toString());

});

console.log('excute end...');
















