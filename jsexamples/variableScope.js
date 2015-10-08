/*
Chris Samuel
ksamuel.chris@gmail.com
September 23, 2015

Understanding Variable scope.

The scope of a variable is the region of your program source code in which
it is defined.

A global variable has a global scope ; it is defined everywhere in your JavaScript
code. On the other hand variables declared within a function are defined only
within the body of the function.

*/



 var scope = "global";// Declare a global variable

//console.log(scope);
// Lets create a function that will have a local scope.
function checkScope(){
var scope = "local"; // Declare a local
  //always return your local variables
   // the code will still work for this program not many though.

return scope;
  }
console.log(checkScope());


// Although you can get away with not using var statement when you write your code in
// global scope, you must always use var to declare variable in local scope.


