var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

Stack.prototype.push = function (value) {
  this[this.length] = value;
  this.length++;
};
Stack.prototype.pop = function () {
  if (this.length > 0) {
    var temp = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return temp;
  }
};
Stack.prototype.size = function () {
  return this.length;
};


