

function f1(){
	console.log('success');
}

function f2(){
	console.log('failure');
}

new Promise(f1(),f2());


