var Stack = function() {
	//your code is here
	this._storage = [];
};

Stack.prototype.add= function(val){
	this._storage.push(val);
};

Stack.prototype.remove= function(){
	this._storage.pop();
};
