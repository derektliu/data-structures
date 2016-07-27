var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 0;
  this.end = 0;
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.end] = value;
  this.length++;
  this.end++;
};

Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    var value = this[this.start];    
    delete this[this.start];
    this.start++;
    this.length--;
    return value;
  }
};

Queue.prototype.size = function() {
  return this.length;
};


