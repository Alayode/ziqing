function counter() {
  var n = 0;
  return {
    //there are two methods
    count: function() {return n++}, //returns the next integer
    reset: function() { n=0; } //resets the internal state in this case  0
  };
}

//  console.log(counter());

  // The counter function returns a counter object { count: [Function], reset: [Function] }

  var c = counter(), d = counter();

  // console.log(c,d);
  console.log(c.count());            // => 0
    console.log(d.count());            // => 0 they count independently
      console.log(c.reset());            // => reset() and count() methods share state
        console.log(c.count());            // => 0: because we reset c
          console.log(d.count());            // => 1: d was not reset


// The first thing to understand is that the two methods share access to the private variable n.
// The second thing to understand is that each invocation of counter() creates a new scope chain and new private variable
// For example calling the object three times gives you 3 counter objects with DIFFERENT PRIVATE VARIABLES
// So calling calling count on one counter object has no effect on the other.
