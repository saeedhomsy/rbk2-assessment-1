var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      //your code is here
      var hashkey = hashFn(key,max);
      if (this._storage[hashkey] !== undefined) {
        for (var i = 0; i < this._storage[hashkey].length; i++) {
          if (this._storage[hashkey][i][0]===key) {
            return this._storage[hashkey][i];
          }
        } 
      }
      return false
    },
    insert: function(key, value) {debugger
            //your code is here
            var hashkey = hashFn(key,max)
            if (this._storage.length === 0) {
              var arr = [key,value]
              var parentArr = []
              parentArr.push(arr)
              this._storage[hashkey] = parentArr;
            }else{
              var isThereDup = false;
              if (this._storage[hashkey] === undefined) {
                var arr = [key,value]
                var parentArr = []
                parentArr.push(arr)
                this._storage[hashkey] = parentArr;
              }else{
                for (var i = 0; i < this._storage[hashkey].length; i++) {
                  if (this._storage[hashkey][i][0]===key) {
                    isThereDup = true;
                    this._storage[hashkey][i] = [key,value]
                  }
                }
                if (!isThereDup) {
                  this._storage[hashkey].push([key,value])
                }
              }
            }
            return this._storage
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