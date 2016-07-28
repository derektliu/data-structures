var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.head === null) {
      var start = Node(value);
      this.head = start;
      this.tail = start;
    } else {
      var node = Node(value);
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var headNode = this.head;
    var nextNode = this.head.next;
    delete this.head;
    this.head = nextNode;
    return headNode.value;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
