var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function() {

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
