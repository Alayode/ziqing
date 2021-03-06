

/*
* Chris Samuel
* ksamuel.chris@icloud.com
*
*
* fileName: Function Hoisting
*
*
* Description: An example about function scope and javascript hoisting.
*
* in the following code, the variables i , j ,k are declared in different spots,
* but all have the same scope - all three are defined throughout the body  of the function.
*
* */



var scope = 'global';

function f() {
    var scope;
    console.log(scope);// will print undefined
    var scope = 'local';
    console.log(scope);// will print local
}

f();
