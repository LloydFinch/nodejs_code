
//路由器，对不同的请求进行转发
var api = require('./api');
var actions = require('./actions/actions');

//路由的映射方法
//path: 根据这个值选择调用哪一个action来处理
//params:传入的参数
function route(path,params){
	switch(path){
		case api.LOGIN:
			return actions.LOGIN.login(params);
		
		case api.SPEAK:
			return actions.SPEAK.speak(params);
		
		default:
			return actions.ERROR.error(params);
	}
}

exports.route = route; 
