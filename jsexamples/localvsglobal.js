/*
*  Chris Samuel
*  ksamuel.chris@icloud.com
*
*  Filename : localvsglobal.js
*
*  Description: To clearly explain what happens when you create a function
*  with global and local scopes.
*
*
*
* */



    //we declare a function called getArea
function getArea(width,height){// we pass in two variables called width and height.
    var area = width * height; // we will multiply width by height and store it in a declared variable called area
    //stops the execution of the function and returns the value of  function
    return area;
}

console.log();//logs nothing
console.log(getArea);//returns [Function: getArea]
console.log(getArea.name);// getArea
console.log(getArea());//return NaN this returns NaN or Not a number cause we tried to multiply two variables that have no numbers



