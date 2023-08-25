// using object for freeze
const glass = { 
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true 
};
// easy way freeze
// Object.freeze(glass)
glass.source = "main in bangladesh"
console.log(glass);