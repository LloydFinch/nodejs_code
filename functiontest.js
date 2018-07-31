
//定义函数，第一个参数是一个函数
function execute(someFunction,value){
	someFunction(value);
}

//传入匿名函数作为参数
execute(function(word){console.log(word)},'hello');
