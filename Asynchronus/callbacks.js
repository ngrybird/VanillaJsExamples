console.log('Hello world');

var i = 0;
var addition = 0;

numbers = [10,20,30,40];

var add =  function(callback){
	addition = addition + numbers[i];
	i++;
	console.log(addition);
	if(i!== 4)
		callback();
}

add(function(){
	add(function(){
		add(function(){
			add(function(){
				add();
			});
		});
	});
});

var i = 0;
var addition = 0;

console.log('New addi method');
//add(add(add(add())));

var addi = function(number, callback){
	addition = addition + number;
	callback();
	console.log(number);
}

addi(numbers[0],function(){
	addi(numbers[1],function(){
		addi(numbers[2],function(){
			addi(numbers[3],function(){
				console.log(addition);
			});
		});
	});
});
