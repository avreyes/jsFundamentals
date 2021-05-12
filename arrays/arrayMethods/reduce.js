// the .reduce method executes a function for each specified value in an array and returns a single value 


const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];
                                //1
const total = foods.reduce((currentTotal, food) => {
    console.log(currentTotal);
    //2
    return food.price + currentTotal;
    //3
}, 5);

console.log(total);

/*
! 1 => this method takes in two parameters
! The first being the current sum of the numbers at each iteration
! The second will be what item we are iterating over(can be named anything)

! 2 => we look at the price of the food item, then add it to the current total
! Then we repeat it over and over again for each item in the array

! 3 => The 0 at the end specifies what value we are going to start at.
! so if we put 200, the total would come out to 1040

*/