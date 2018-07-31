
var server  = require('./server');
var router = require('./router');
var requestHandlers  = require('./requestHandler');

var handle = {};
handle['/public/index.html'] = requestHandlers.init;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

console.log(module);

server.start(router.route,handle);




