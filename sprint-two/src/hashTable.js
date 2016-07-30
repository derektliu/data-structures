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

    /**************** GamerLazer ****************/
    var doubleHash = new HashTable;
    doubleHash._limit = this._limit * 2;
    doubleHash._storage = LimitedArray(doubleHash._limit);
    // var insertDoubleHash = this.insert.bind(doubleHash);

    this._storage.each(function(buck, key, collection) {
      if (buck) {
        for (var i = 0; i < buck.length; i++) {
          var key = buck[i][0];
          var value = buck[i][1];
          // insertDoubleHash(key, value);
          doubleHash.insert(key, value);
        }
      }
    });

    this._storage = doubleHash._storage;
    this._limit = this._limit * 2;

    /************** Derek *****************/

    // var newLimit = this._limit * 2;
    // var doubleHash = LimitedArray(newLimit);

    // this._storage.each(function(buck, key, collection) {
    //   if (buck) {
    //     for (var i = 0; i < buck.length; i++) {
    //       var key = buck[i][0];
    //       var value = buck[i][1];
    //       var ind = getIndexBelowMaxForKey(key, newLimit);
    //       var tempBucket = doubleHash.get(ind) || [];

    //       tempBucket.push([key, value]);
    //       doubleHash.set(ind, tempBucket);
    //     }
    //   }
    // });

    // this._limit = newLimit;
    // this._storage = doubleHash;

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
      this._size--;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */