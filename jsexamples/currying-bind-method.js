


/*

The bind() method

To understand currying lets take a look at the bind method.

Chris Samuel
ksamuel.chris@gmail.com

*/


function f(y) {
  return this.x + y
}; //This function needs to be bound
  // if called this function right now we will end up with x being undefined
var o = { x : 1 };
console.log(o);//{x:1};
console.log(f());//NaN
console.log(f.bind(o)); //[Function: bound f]
var g = f.bind(o); // calling g(x) invokes o.f(x)
console.log(g(1));
