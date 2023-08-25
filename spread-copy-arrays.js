// use copy arrays
const friends = [4, 5, 87, 9];
const bondhu = friends;
const dosto = [...friends] // copy
// new number push
friends.push(100)
// console.log(dosto)
console.log(friends)

// Cloning array using spread
// operator- ES6

const oldArray = ["dog1", "dog2", "dog3"];
const clonedArrayES6 = [...oldArray];
console.log(clonedArrayES6);


// advanced copy and push
const sonkha = [...friends, 9999] // add extra elements while copy
console.log(sonkha)