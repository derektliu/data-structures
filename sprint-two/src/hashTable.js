var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

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
  // if key is not found, push new tuple to bucket
  bucket.push([k, v]);
  this._size++;
  // and change original bucket to new bucket
  this._storage.set(index, bucket);

  // if storage is at 75%
  if (this._size >= this._limit * .75) {
    this._resize(this._limit * 2);
  }

  return undefined;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // get bucket at index
  var bucket = this._storage.get(index) || [];

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

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      this._storage.get(index).splice(i, 1);
      this._size--;
    }
  }

  if (this._size <= this._limit * .25) {
    this._resize(this._limit / 2);
  }

};

HashTable.prototype._resize = function(newLimit) {

  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit) { return; }

  this._limit = newLimit;

    /**************** GamerLazer ****************/
  // var rehash = new HashTable;
  
  // rehash._storage = LimitedArray(newLimit);
  // rehash._limit = newLimit;
  // // var insertDoubleHash = this.insert.bind(rehash);

  // this._storage.each(function(bucket) {
  //   if (bucket) {
  //     for (var i = 0; i < bucket.length; i++) {
  //       var tuple = bucket[i];
  //       // insertDoubleHash(key, value);
  //       rehash.insert(tuple[0], tuple[1]);
  //     }
  //   }
  // });

  // this._storage = rehash._storage;
  
  /************** Derek *****************/

  var rehash = LimitedArray(newLimit);

  this._storage.each(function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        var newIndex = getIndexBelowMaxForKey(tuple[0], newLimit);
        var tempBucket = rehash.get(newIndex) || [];

        tempBucket.push(tuple);
        rehash.set(newIndex, tempBucket);
      }
    }
  });

  this._limit = newLimit;
  this._storage = rehash;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */