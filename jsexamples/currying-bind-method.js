


/*

The bind() method

To understand currying lets take a look at the bind method.

Chris Samuel
ksamuel.chris@gmail.com

*/


function f(y) { return this.x + y } //This function needs to be bound
var o = { x:1 };

  console.log(f(y));// Error y is undefined
