console.log("********Welcome to promises**************\n");
/*
var requestMobile = new Promise(function(resolve,reject){
	console.log('Mommy, I want new mobile phone !');
	if(1){
		resolve('Yes, you will get one!');
	}
	else{
		reject('Chal bhaag yaha se!');
	}
});

var selectMobile = function(momAnswers){
	console.log(momAnswers);
}

requestMobile
.then(selectMobile)
.catch(function(message){
	console.log(message)
});

console.log('**************return promise method********************\n');

var newPromise = function(){
	return new Promise(function(resolve,reject){
		//console.log(parameter);
		console.log('Mommy, I want new mobile phone !');
		if(1){
			resolve('Yes, you will get one!');
		}
		else{
			reject('Chal bhaag yaha se!');
		}
	});	
}

//callPromise = newPromise('sendin parameter to promise!');

newPromise()
.then(selectMobile)
.catch(function(message){
	cosole.log(message);
});
*/


console.log('**************Two promises********************\n');

var promise1 = function(){
	return new Promise(function(resolve,reject){
		console.log('In Promise 1');
		if(0){
			resolve('calling promise2')
		}
		else{
			reject('failed to call');
		}
		console.log('Ending promise1');
	});
}
var promise2 = function(message){
	return new Promise(function(resolve,reject){
		console.log(message)
		console.log('in Promise2');
		if(1){
			resolve('ending promise2');
		}
		else{
			reject('failed to call');
		}
	});
}

var finalMessage = promise1()
.then(promise2)
.then((message)=>message)
.catch((message)=>console.log(message));
 console.log('Final message is : '+finalMessage.resolve());