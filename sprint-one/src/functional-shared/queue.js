var extend = function(dest, source) {
  for (var key in source) {
    dest[key] = source[key];
  }
  return dest;
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = {
    'length': 0,
    'start': 0,
    'end': 0
  };

  extend(storage, queueMethods);

  return storage;
};

var queueMethods = {

  'enqueue': function(value) {
    this.length++;
    this[this.start] = value;
    this.end++;
  },
  'dequeue': function() {},
  'size': function() {
    return this.length;
  }

};


