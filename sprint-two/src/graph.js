

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // look up, if found === true else false
  for (var key in this.nodes) {
    if (Number(key) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes) { // iterating through keys in Graph
    var edgeArray = this.nodes[key];
    if (edgeArray.indexOf(node) >= 0) { // if current Node has 'node' in Edge array
      var index = edgeArray.indexOf(node);
      edgeArray.splice(index, 1);
    }
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
  // check if edge between nodes does exists
    if (this.nodes[fromNode].indexOf(toNode) >= 0 && this.nodes[toNode].indexOf(fromNode) >= 0) {
      return true;
    }  
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode)) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


//