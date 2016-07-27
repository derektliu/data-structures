var extend = function(dest, source) {
  for (var key in source) {
    dest[key] = source[key];
  }
  return dest;
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = {'length': 0};
  extend( storage, stackMethods );
  return storage;
};

var stackMethods = {
  'push': function(value) { 
    var key = this.length;
    this[key] = value;
    this.length++;
  }, 
  'pop': function (argument) {
    if (this.length > 0) {
      var key = this.length - 1;
      var popped = this[key];
      delete this[key];
      this.length--;
      return popped;
    }
  },
  'size': function () {
    return this.length;
  }
};


