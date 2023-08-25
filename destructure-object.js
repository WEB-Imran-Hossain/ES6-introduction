// Basic Object destructuring assignment
const student = {
    name: 'Imran', 
    position: 'Middle', 
    rollNo: '93'
};  
const {name, position, rollNo} = student;  
console.log(name); // Imran  
console.log(position); // Middlle 
console.log(rollNo); // 93  

// Object destructuring and default values
const {x = 100, y = 200} = {x: 500};  
  
console.log(x); // 500  
console.log(y); // 200  

// Assigning new variable names
const num = {
    x: 100, 
    y: 200
};  
const {x: new1, y: new2} = num;  
   
console.log(new1); //100   
console.log(new2); //200  

// Assigning new variable names
const actor = {
    name: 'Imran',
    age: 36,
    phone: '01744340000',
    money: 124545121545
}
// if right side is an object left side of destructuring will be object as well 
const {phone, age: boyos} = actor

console.log(phone)
console.log(phone)
console.log(boyos)
