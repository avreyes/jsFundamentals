// the slice method will return a copy of the special portion of the array 
// the portion is specified by the index given in the parameters

const array = [10, 'student', 'cake', -78, 'Zebra', 900, 'string'];

console.log(array.slice(1, 4));
console.log(array.slice(0, 4));
console.log(array.slice(1, 3));

console.log(array.slice(1, -1)); 

// if the second parameter is not specified, the method will target the rest of the array after the specified index

console.log(array.slice(2));
