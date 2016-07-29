var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // check if bucket exists
  if (!this._storage.get(index)) {
    // if not, create empty bucket array
    this._storage.set(index, []);
  }
  // grab bucket at index
  var bucket = this._storage.get(index);
  var found = false;

  // check for key at bucket
  for (var i = 0; i < bucket.length; i++) {
    // if key at current tuple equals k
    if (bucket[i][0] === k) {
    // replace value if key exists
      this._storage.get(index)[i][1] = v;
      found = true;
    }
  }

  // if key is not in bucket
  if (!found) {
    // push tuple with new key and value to bucket
    this._storage.get(index).push([k, v]);
  }

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


