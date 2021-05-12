//! the .sort method sorts the items in an array. The sort order can be either alphabetic or numeric
// and either ascending or descending. 
//? By default, sort() orders the values as strings in alphabetical and ascending order
//* Can take in a compare function which indicates if you want to sort by ascending or descending order

const shoppingList = ["celery", "limes", " grenadine", "oranges"];

console.log(shoppingList.sort());

const costs = [3, 2, 13, 1000];

console.log(costs.sort((a,b) => b - a));
//descending order

console.log(costs.sort((a,b) => a - b));
//ascending order