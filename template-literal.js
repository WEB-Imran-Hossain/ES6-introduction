// normal way
const first = 'Jaan'
const last = 'pakhi'
const greet = 'Potas potas';
const name = first + ' ' + last + " " + greet;
console.log(name);

// template literal way
const numbers = [45, 48, 98,78]
const student = {
    name: 'john ochena', 
    age: 5
}
const math = `The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`
console.log(math)
