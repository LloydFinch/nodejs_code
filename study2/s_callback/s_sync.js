
var fs = require('fs');


var fileName = 'input.txt';

var data = fs.readFileSync(fileName);

console.log('read file result is :', data.toString());

console.log('excute end...');







