
var fs = require('fs');
var zlib = require('zlib');

//解压testp.txt.gz为testp.txt
fs.createReadStream('testp.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('testp.txt'));

console.log('app execute finish!');

