/*var getUser = async function(){
	console.log('In getUser function');
	console.log('calling await');
	var a = await getFriends();
	console.log('value of a' + a);
	console.log('After calling getFriends await method')
}
var getFriends = function(){
	setTimeout(function(){
		console.log('************In getFriends function**********');	
		
	},2000);
	return 20;
}

getUser();
*/
var addition = 0;
var addN = async function(n, callback){
	try{
		console.log(addition);
		addition = addition + n;	
		if(callback){
			await callback();
		}			
	}catch(m){
		console.log('error occured --> '+m);
	}

}
//addN(10, addN(20, addN(30, null)));
addN(10, function(){
	addN(20, function(){
		console.log('final addition '+addition);
	})
});