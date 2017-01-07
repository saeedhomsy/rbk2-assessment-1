var Stack = function() {
	//your code is here
	this._storage = [];
};

Stack.prototype.add= function(val){
	this._storage.unshift(val);
	console.log(this._storage);
};

Stack.prototype.remove= function(){
	this._storage.shift(this._storage[0]);
	console.log(this._storage);
};
