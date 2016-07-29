var BinarySearchTree = function(value) {
  var tree = {};

  tree.value = value;

  tree.left = undefined;
  tree.right = undefined;

  tree.insert = function(value, node) {

    node = node || this;

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

  tree.contains = function(value, node) {

    node = node || this;

    if (value === node.value) {
      return true;
    } else if (value < node.value && node.left) {
      return node.contains(value, node.left);
    } else if (value > node.value && node.right) {
      return node.contains(value, node.right);
    }
    return false;

  };

  tree.depthFirstLog = function(func, node) {
    node = node || this;

    // left side 
    // keep going down left and checking if left is undef check right

    
    // if left node exists
    // if (node.left) {
    //   func(node.value);
    //   node.depthFirstLog(func, node.left);
    // } else if (node.right) {
    //   func(node.value);
    //   node.depthFirstLog(func, node.right);
    // } else {
    //   return func(node.value);
    // }

    func(node.value);

    if (node.left) {
      node.depthFirstLog(func, node.left);
    } if (node.right) {
      node.depthFirstLog(func, node.right);
    }
    

    // right side

    

  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
