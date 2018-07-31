var server = require('./server2.js');
var router = require('./router');

server.start(router.route);
