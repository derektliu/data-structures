var DoublyLinkedlist = function() {
  var doublyLinkedlist = {};
  doublyLinkedlist.head = null;
  doublyLinkedlist.tail = null;

  doublyLinkedlist.addToTail = function(value) {
    if (this.head === null) {
      var start = Node(value);
      this.head = start;
      this.tail = start;
    } else {
      var newTail = Node(value);
      this.tail.next = newTail;
      newTail.previous = this.tail;
      this.tail = newTail;
    }
  };

  doublyLinkedlist.removeHead = function() {
    var headNode = this.head;
    var nextNode = this.head.next;
    delete this.head;
    this.head = nextNode;
    return headNode.value;
  };

  doublyLinkedlist.contains = function(target) {
    var currentNode = this.head;

    // loop through until the last node
    while ( currentNode.next !== null ) {
      if ( currentNode.value === target ) {
        return true;
      }
      currentNode = currentNode.next;
    }
    // final check for 'tail' node since 'tail.next' is null.
    return currentNode.value === target;
  };

  doublyLinkedlist.addToHead = function () {};

  doublyLinkedlist.removeTail = function () {
  };

  return doublyLinkedlist;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
