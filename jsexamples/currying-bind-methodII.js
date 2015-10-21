/*
  Chris Samuel
  ksamuel.chris@gmail.com

  FileName: currying-bind-methodII.js

  Description:

  A simple Demo on using partial functions known as currying.
*/

function seal(fn,ctx){
  var args = [].slice.call(arguments,2);
  //console.log(args);
      return function() {
        fn.apply(ctx,args);
  };
};
//console.log(seal())
//console.log(seal(fn,ctx));


function doit() {
  console.log('args: ' + arguments.length);
}

console.clear();
