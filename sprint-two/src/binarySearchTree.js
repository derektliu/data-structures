var BinarySearchTree = function(value) {
  var tree = {};

  tree.value = value;

  tree.left = undefined;
  tree.right = undefined;

  tree.insert = function(value, node) {

    node = node || this;
    console.log(node);

    // if smaller value
    if (value < node.value) {
      if (node.left === undefined) {
        node.left = BinarySearchTree(value);
      } else {
        node.insert(value, node.left);
      }
    } else if (value > node.value) { // if larger value
      if (node.right === undefined) {
        node.right = BinarySearchTree(value);
      } else {
        node.insert(value, node.right);
      }
    }



  };
  tree.contains = function() {};
  tree.depthFirstLog = function() {};

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
