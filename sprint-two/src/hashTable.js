

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // if bucket list is <75% of storage length, insert value
  // else, rehash table.

  // Does bucket exist
  if (!this._storage[index]) {
    this._storage[index] = [];
  }

  var foundIndex = false;
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      foundIndex = true;
      this._storage[index][i][1] = v;
      break;
    }
  }
  if (!foundIndex) {
    var newTuple = [k, v];
    this._storage[index].push(newTuple); 
    this._size++;
  }
  // console.log(this._size);
  // if bucket list is <75% of storage length, insert value
  if (this._size >= this._limit * .75) {
    // reassign limit to limit * 2

    this._limit = this._limit * 2;

    // create new limited array with new limit
    var rehashed = LimitedArray(this._limit);
    rehashed._storage = [];
    

    // loop through current storage
    for (var i = 0; i < size; i++) {
      console.log('in first for loop');
      for (var j = 0; j < this._storage[i].length; j++) {
      // insert each value to new array
        console.log('in nested for loop');

        var key = this._storage[i][j][0];
        var hashedKey = getIndexBelowMaxForKey(key, this._limit);
        var value = this._storage[i][j][1];

        console.log('key', key);
        console.log('hashedKey', hashedKey);
        console.log('value', value);

        // take key var rehash it
        var tuple = [hashedKey, value];
        console.log('tuple', tuple);
        // got rehashed table set & push
        rehashed[hashedKey].push(tuple);
      }
    }
    // replace storage with new storage
    this._storage = rehashed;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
      this._size--;
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


