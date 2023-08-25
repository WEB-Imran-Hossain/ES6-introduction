// using object for seal
const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

// easy way seal
Object.seal(glass);
glass.price = 5000;
console.log(glass);
