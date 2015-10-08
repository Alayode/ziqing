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

scope = "global";  // declare a variable without var

function checkscope2(){
  scope = "local";         //Whoops changed the global variable
  myscope ="local";       // This implicitly decles a new global variable
  return [scope,myscope] // return two variables
}


// checkscope2(); //local
// scope; // ['local', 'local']
// myscope; //local



console.log(scope) // global namespace is cluttered up
console.log(checkscope2()) //[ 'local', 'local' ]
console.log(myscope) // local
