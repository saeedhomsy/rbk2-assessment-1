var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      //your code is here
      if (key in this._storage[0]) {
        return i;
      }

      return false;
    },

    insert: function(key, value) {
      //your code is here
      var startPoint = this.retrieve(key);
      var findPlace = false;
      if (!startPoint) {
        for (var i = startPoint+1; i < this._storage.length; i++) {
          if (this._storage[i] === undefined && this._storage[i] <=max) {
            findPlace = true;
            this._storage[0][key] = value;
          }
        }
        if (!findPlace) {
          for (var i = 0; i < startPoint; i++) {
            if (this._storage[i] === undefined && this._storage[i] <=max) {
              findPlace = true;
              this._storage[0][key] = value;
            }
          }
        }
        if (!findPlace) {
          return 'full stack'
        }
      }else{
        this._storage[0][key] = value;
      }
    };
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