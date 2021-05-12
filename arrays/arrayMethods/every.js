//! the every method checks the array for a condition and then returns true or false like the .some method, except it checks every item in the array to see if it meets that condition



const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

  const isExpensive = foods.every((food) => {
      return food.price <= 1000
  })

  console.log(isExpensive);

  //this can be used to check any object and object inside an array 