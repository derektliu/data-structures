

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage[index]) {
    // console.log('create new array');
    this._storage[index] = [];
  }
  // check if key exist in bucket if so reassign that key to new value
  // if (this.retrieve(k) !== undefined) {
  //   this._storage[index]
  // } else {
  //   var newTuple = [k, v];
  //   this._storage[index].push(newTuple);
  // }
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
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


