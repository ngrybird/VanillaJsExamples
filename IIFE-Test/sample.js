(function(){
	var clickhere = function(){
		console.log("you have clicked on a btton");
	}
	console.log("immediatly invoked function expression");
	this.clickhere = clickhere;		//window / this
}());