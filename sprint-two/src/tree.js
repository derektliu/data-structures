var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var found = false;

  var search = function (node, target) {
    if (node.value === target) { found = true; }
    for (var i = 0; i < node.children.length; i++) {
      search(node.children[i], target);
    }
  };

  search(this, target);

  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
