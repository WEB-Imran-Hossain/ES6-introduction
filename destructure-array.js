// array destructuring. 
const numbers = [45, 99]
const [first, second] = numbers;
const [x, y] = [12, 66];

console.log("Value of 'first':", first);
console.log("Value of 'second':", second);
console.log("Value of 'x':", x);
console.log("Value of 'y':", y);

// advanced
function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo)