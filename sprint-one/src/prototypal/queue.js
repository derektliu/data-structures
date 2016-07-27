var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create( queueMethods );
  storage.start = 0;
  storage.end = 0;
  storage.length = 0;
  return storage;
};

var queueMethods = {
};

queueMethods.enqueue = function (value) {
  this[this.end] = value;
  this.end++;
  this.length++;
};
queueMethods.dequeue = function () {
  if (this.length > 0) {
    var item = this[this.start];
    delete this[this.start];
    this.start++;
    this.length--;
    return item;
  }
};
queueMethods.size = function () {
  return this.length;
};


