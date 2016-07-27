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
  // 'pop' : ???,
  'size': function () {
    return this.length;
  }
};


