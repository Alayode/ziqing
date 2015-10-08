/*
Chris Samuel
ksamuel.chris@gmail.com
September 23, 2015

variableScope3.js

Understanding Variable scope.

The scope of a variable is the region of your program source code in which
it is defined.

A global variable has a global scope ; it is defined everywhere in your JavaScript
code. On the other hand variables declared within a function are defined only
within the body of the function.

*/

var scope = "global scope";  // a global variable

function checkscope(){
  var scope = "local";         // A local variable
  function nested(){
    var scope = "nested scope" // a nested scope of local variables
    return scope; //return the value in scope here
  }
  return nested();
}
checkscope()   //"nested scope"



/*
Functions definition can be nested. Each function has its own local scope, so it is possible to have
several nested layeers of local scope
*/
