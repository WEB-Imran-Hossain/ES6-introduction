// for of use on array or string not in object
// for loop for array
const numberArray = [1, 6, 8, 4];
for(let i = 0; i < numberArray.length; i++){
    console.log(numberArray);
}

// while loop for array

// for of loop for array
const numbers = [1, 6, 8, 4];
for(const num of numbers){
    console.log(num);
}

// for of loop for string
const nobab = 'Siraj Ud Doula';
for(const char of nobab){
    console.log(char);
}

// for of loop never easy work in object. it's using for in loop (remember it)

const glass = { 
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true 
};

for(const key in glass){
    const value = glass[key];
    console.log(key, value)
}
// not working for loop
for(const key of glass){
    console.log(key)
}

// optional way for for loop
const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    const value = glass[key];
    console.log(key, value)
}