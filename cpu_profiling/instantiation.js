
/******************* Other **********************/
var testFunction = function() {
  
  // var testObject = new Queue(); // Psuedoclassical

  // loop and enqueue a lot of keys?
  var key = 0;
  for (var i = 0; i < 10000; i++ ) {
    var testObject = Queue();
    for (var j = 0; j < 10000; j++ ) {
      testObject.enqueue(key);
    }
  }
};

testFunction();
/******************* Pseudoclassical **********************/