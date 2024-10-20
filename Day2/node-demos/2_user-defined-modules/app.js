// require('./lib.js');

// const lib = require('./lib.js');
// console.log(lib);

const lib = require('./lib');
lib.log("Hello");

var p1 = new lib.Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());