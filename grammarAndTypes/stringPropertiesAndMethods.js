/*String Properties
-properties associated with a datatype
-strings have only one property and that is the length property

*/

let myName = "alyssa";
console.log(myName.length);


/*String Methods
-methods are tools that can help us manipulate our data
.method() .property
-not having or adding () will break your code
-meothods are functions associated with datatypes
*/

console.log(myName.toUpperCase());
//.toUpperCase() will capitalize all letters

let home = 'My home is Indiana';
console.log(home.includes('Indiana'));
//.includes() will check if a certain string is included in another string

let sent = 'This sentence will be split into individual pieces'
console.log(sent.split(' '));
