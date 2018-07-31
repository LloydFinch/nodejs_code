
exports.queryStringByKey = function queryStringByKey(queryString,key){
	
	//构造正则表达式
	var regex = '(^|&)' + key + '=([^&]*)(&|$)'
	//构造匹配对象,i:对大小写不敏感
	var regExp = new RegExp(regex,'i');
	//得到匹配结果数组
	var result = queryString.match(regExp);
	if(result != null){
		//取得查找的值,解码并返回
		return unescape(result[2]);
	}
	return 'null';
}
