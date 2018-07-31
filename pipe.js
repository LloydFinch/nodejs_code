
var fs = require('fs');

var readerStream = fs.createReadStream('iinput.txt');

var writerStream = fs.createWriteStream('ooutput.txt');

//管道读写操作，读取iinput.txt并写到ooutput.txt中
readerStream.pipe(writerStream); 

console.log('app execute finish!');
