
//导入start.js文件中导出的模块
var start = require('./start');
var router = require('./router');
var handler = require('./handler');

var handle = {};
handle['/'] = handler.start;
handle['/start'] = handler.start;
handle['/upload'] = handler.upload;
handle['/show'] = handler.show;

//调用该模块的函数
start.start(router.route, handle);

