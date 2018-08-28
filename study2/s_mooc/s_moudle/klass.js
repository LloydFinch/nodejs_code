var student = require('./student');
var teacher = require('./teacher');


//student.add('lloyd');
//teacher.add('finch');

exports.add = function(teacher_name,students){
	teacher.add(teacher_name);
	
	students.forEach(function(item,index){
		student.add(item);
	})
}





