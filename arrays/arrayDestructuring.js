/* **********
! ARRAY DESTUCTURING
***********
-allows us to unpack values from arrays or properties from objects
-similar syntax as array literals BUT is on the LEFT side of the assignment
    -this defines what values to unpack
-great for pulling info out of an array/object and assigning that data to its own variable

*/

//*Syntax
const boardGames = ['Catan', 'Pandemic', 'Roll Player'];

// const gameOne = boardGames[0];
// const gameOne = boardGames[1];
// const gameOne = boardGames[2];

const [gameOne, gameTwo, gameThree] = boardGames;

console.log(gameOne);
console.log(gameTwo);
console.log(gameThree); 