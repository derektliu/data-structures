var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];
<<<<<<< HEAD
=======
  console.log(bucket);
>>>>>>> 1122dda4a84299c30ff42bcf78f6c97ce1bd494d

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

<<<<<<< HEAD
  // if key is not found, push new tuple to bucket
  bucket.push([k, v]);
  this._size++;
  // and change original bucket to new bucket
  this._storage.set(index, bucket);

  // if storage is at 75%
  console.log('size', this._size);
  if (this._size >= this._limit * .75) {
    console.log('rehashing');
    
    //   this._limit = this._limit * 2;

    var doubleHash = new HashTable;
    doubleHash._limit = this._limit * 2;
    doubleHash._storage = LimitedArray(doubleHash._limit);
    var insertDoubleHash = this.insert.bind(doubleHash);
      // insert every tuple in OGstorage to doubleHash

    this._storage.each(function(buck, key, collection) {
      // console.log('bucket', buck, 'key', key, 'collection', collection );
      if (buck) {

        for (var i = 0; i < buck.length; i++) {
          // console.log('bucket[i]', i, bucket[i]);
          var key = buck[i][0];
          var value = buck[i][1];
          // var ind = getIndexBelowMaxForKey(key, 16);
          insertDoubleHash(key, value);
          // if (!doubleHash[ind]) {
          //   doubleHash[ind] = [];
          // }

          // doubleHash[ind].push([key, value]);

          // console.log([key, value], doubleHash[ind]);
        }
      }
    });

    this._storage = doubleHash._storage;
    this._limit = this._limit * 2;
  // this._storage = doubleHash;
    // this._limit = this._limit * 2;
  }
=======
  bucket.push([k, v]);
  this._storage.set(index, bucket);
  // // if key is not in bucket
  // if (!found) {
  //   // push tuple with new key and value to bucket
  // }

>>>>>>> 1122dda4a84299c30ff42bcf78f6c97ce1bd494d
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

// var test = new Hashtable();

/*
 * Complexity: What is the time complexity of the above functions?
 */


