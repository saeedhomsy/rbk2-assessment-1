var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      //your code is here
      var hashkey = hashFn(key,max);
      for (var i = 0; i < this._storage.length; i++) {
        if (this._storage[i][0]===hashkey) {
          return this._storage[i][1];
        }
      }
      return false
    },
    insert: function(key, value) {
            //your code is here
            var hashkey = hashFn(key,max)
            var findKey = false;
            for (var i = 0; i < this._storage.length; i++) {
              if (this._storage[i][0] === hashkey) {
                findKey = true;
                this._storage[i] = [hashkey,value]
              }
            }

            if (!findKey) {
              this._storage.push([hashkey,value])
            }
            return this._storage;
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