// multiply
// default parameters using value for function and Output always
function multiply(a, b = 1) {
  return a * b;
}

// console.log(multiply(5));

// default parameters not using value for function and output NaN
function multiply(a, b) {
  return a * b;
}

// console.log(multiply(10));

// add or sum
function add(num1, num2) {
  let result = 0;
  result = num1 + num2;
  //   console.log(result);
}

// add(10, 5);

function add(num1 = 99, num2 = 0) {
  const result = num1 + num2;
  return result;
}

const sum = add(5,7)
console.log(sum);