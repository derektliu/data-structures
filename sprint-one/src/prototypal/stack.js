var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = Object.create(stackMethods);
  storage.length = 0;

  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {

  if (this.length > 0) {
    var popped = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return popped;
  }
  
};

stackMethods.size = function() {
  return this.length;
};



