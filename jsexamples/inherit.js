function inherit(p){
  // lets make sure that p is a non-null object.
    if (p == null)
        throw TypeError();
    if (Object.create) // if the Object.create is defined..
          return Object.create(p); //then we will be able to use it .
}


var t = typeof p;
console.log(t);



