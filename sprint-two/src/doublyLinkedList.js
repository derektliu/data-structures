var DoublyLinkedList = function() {
  var doublyLinkedList = {};
  doublyLinkedList.head = null;
  doublyLinkedList.tail = null;

  doublyLinkedList.addToTail = function(value) {
    var newTail = Node(value);
    if (this.tail === null) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      var oldTail = this.tail;
      oldTail.next = newTail;
      newTail.previous = oldTail;
      this.tail = newTail;
    }
  };

  doublyLinkedList.addToHead = function (value) {
    var newHead = Node(value);
    if (this.head === null) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      var oldHead = this.head;
      oldHead.previous = newHead;
      newHead.next = oldHead;
      this.head = newHead;
    }
  };

  doublyLinkedList.removeHead = function() {
    var headNode = this.head;
    this.head = this.head.next;
    return headNode.value;
  };

  doublyLinkedList.removeTail = function () {
    var tailNode = this.tail;
    this.tail = this.tail.previous;
    return tailNode.value;
  };

  doublyLinkedList.contains = function(target) {
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

  return doublyLinkedList;
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
