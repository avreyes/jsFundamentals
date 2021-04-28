/* *******
 ! For In Loops
 -great for iterating over values in a n object
 -properties in obects are what's called enumerable 
 -enumerable just means 'countable'
 **********/

let student = {
    name: 'Jake from state farm',
    awesome: true,
    degree: "insurance sales",
    age: 98
};

for(potato in student){
    console.log(potato);
    console.log(student[potato]);
};