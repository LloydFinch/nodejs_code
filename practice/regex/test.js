
var urlquery = require('./urlquery');
 
var queryString = 'id=123&name=hello&sex=man';

var value1 = urlquery.queryStringByKey(queryString,'id');
var value2 = urlquery.queryStringByKey(queryString,'name');
var value3 = urlquery.queryStringByKey(queryString,'sex');

console.log(value1,value2,value3);
