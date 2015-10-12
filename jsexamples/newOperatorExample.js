

/*
* Chris Samuel
* ksamuel.chris@icloud.com
*
*
*Filename: newOperatorExample.js
*
* Description
*
* I never really understood the new operator very well before I always thought
* It was just used for creating new objects. There is alot more behind this JavaScript
* Keyword.
*
*  new constructor[ ([ arguments ]) ]
*
*
*   constructor  - a function that specifies a type
*   arguments    - a list of values that the constructor will be called with.
*   * */

/* The new operator creates an instance of a user-defined object type or one of the built-in object types that has a constructor function */



        //var d =  date(); // this is wrong   will return undefined
        //var d =  new date(); // almost but you forgot one importatnt thing.  the date() could be a non built in function but it has no capital letter not defined
        var d =  new Date(); // the Date() object is a constructor in which it is always expressed with a Capital first letter.
                console.log(d); //Mon Oct 12 2015 10:50:50 GMT-0400 (EDT) it will be the current date.
