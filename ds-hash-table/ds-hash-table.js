var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      //your code is here
      for (var i = 0; i < this._storage.length; i++) {
        if (key in this._storage[i]) {
          return i;
        }
      }
      return false;
    },

    insert: function(key, value) {
      //your code is here
      var isReturnToStart = false;
      var startPoint = this.retrieve(key);
      if (!startPoint) {
        while(this._storage[i+1]){
          if(){
            
          }
        }
      }

    };
  };

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};