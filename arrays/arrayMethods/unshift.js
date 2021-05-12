//! the unshift method adds an element to the beginning of an array

const array = [10, 'student', 'cake', -78, 'Zebra'];

console.log("Before: ", array);

const addedItem = array.unshift('added item');

console.log("After: ", array);

console.log("Added item: ", addedItem);

//! Another example

const nums = [1, 2, 3, 4, 5];
console.log(nums);
nums.unshift(0);
console.log(nums);