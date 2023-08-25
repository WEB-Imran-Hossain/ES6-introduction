// using object for delete
const glass = { 
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true 
};
// easy way delete
delete glass.isCleaned;
console.log(glass);

// complex destructure delete
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);