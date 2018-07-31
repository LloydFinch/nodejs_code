
exports.queryString = function queryString(query,name) {
 	
	//构造正则表达式 
	//g:全局匹配,不会在匹配到第一个终止 
	//i:不区分大小写匹配
	//m:多行匹配
	
	//此正则的意义:以&开头(^|&),以&结尾(&|$),中间是name=(一个或多个非&的字符),name=([^&]*)
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");//返回正则表达式
	console.log(reg);
	//返回匹配结果的数组
	//1 如果非g匹配，该数组的第0个元素存放的是匹配文本，其余元素存放的是匹配文本的元字符
	//替换过的字符;如果不是元字符则不会存放
	//还有个index属性，存放匹配文本的起始位置，input属性，存放当前字符串的内容
	//数组内容:[匹配的文本,开头字符,匹配的字符,结束字符,index,input]
	
	//2 如果是g匹配，只存放匹配的文本
	var r = query.match(reg);
	console.log(r);
	if (r != null){
		 //解码
		 return unescape(r[2]);
	}
	return ''; 
}
