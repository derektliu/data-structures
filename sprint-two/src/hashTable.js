var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];
  console.log(bucket);

  // check for key at bucket
  for (var i = 0; i < bucket.length; i++) {
    // if key at current tuple equals k
    if (bucket[i][0] === k) {
    // replace value if key exists
      var oldValue = bucket[i][1];
      bucket[i][1] = v;
      return oldValue;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
  // // if key is not in bucket
  // if (!found) {
  //   // push tuple with new key and value to bucket
  // }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // get bucket at index
  var bucket = this._storage.get(index);

  // iterate through bucket to check for 'k' key
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      // return value if key is found
      return bucket[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      this._storage.get(index).splice(i, 1);
    }
  }

};

// var test = new Hashtable();

/*
 * Complexity: What is the time complexity of the above functions?
 */


