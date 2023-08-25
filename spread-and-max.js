// use spread
const max = Math.max(6, 23, 45, 1, 89, 23)
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
// console.log(...numbers)
console.log(arrayMax)

//Spreed Operator
const price = [10, 50, 20, 30, 40];
const price2 = [70, 50, 60, 100];
const price3 = [35, 60, 70];

const combinedPrices = [...price, ...price2, ...price3];  //using three dots means spread operator
const maxPrice = Math.max(...combinedPrices)
console.log(maxPrice); 

