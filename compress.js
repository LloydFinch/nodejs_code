
var fs = require('fs');
var zlib = require('zlib');

//压缩testp.txt为textp.txt.gz
fs.createReadStream('testp.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('testp.txt.gz'));

console.log('app execute finish!');
