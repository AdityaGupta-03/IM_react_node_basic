// If I use ... on Lefthand side of assignmnet Operator (Rest)
// If I use ... on Righthand side of assignmnet Operator (Spread)

// In ECMAScript 2015, we can use ... only with Iterable Objects (Arrays)
// In ECMAScript 2018, we can use ... with Objects also

// ----------------------------------------------------------- Array Spread

var arr1 = [10, 20, 30, 40, [50, 60]];

// Reference Copy
// var arr2 = arr1;

// Shallow Copy
// var arr2 = arr1.slice();
// var arr2 = [].concat(arr1);
// var arr2 = [...arr1];

// // Deep Copy
// // var arr2 = JSON.parse(JSON.stringify(arr1));

// arr2[0] = 1000;
// arr2[4][0] = 5000;

// console.log("Array 1", arr1);
// console.log("Array 2", arr2);

// -----------------------

// var arr1 = [10, 20, 30];
// var arr2 = [40, 50, 60];

// var arr3 = [...arr1, ...arr2];

// console.log("Array 1", arr1);
// console.log("Array 2", arr2);
// console.log("Array 3", arr3);

// ----------------------------------------------------------------- Array Destructuring & Rest

// var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// // ES 5 - Destructuring
// // var x = arr[0];
// // var y = arr[1];

// // ES 6 - Destructuring
// // var [x, y] = arr;
// // var [x, , y] = arr;

// // console.log(`x = ${x}, y = ${y}`);

// // ECMASCRIPT 2015 - Destructuring with Rest
// var [x, y, ...z] = arr;

// console.log(`x = ${x}, y = ${y}`);
// console.log(`z = ${z}`);
// console.log(z);

// ----------------------------------------------------------------- Object Spread (ES 2018)

// var person1 = { id: 1, name: "Manish", address: { city: "Pune" } };

// // Reference Copy
// // var person2 = person1;

// // Shallow Copy

// // ES 5
// // var person2 = {};
// // person2.id = person1.id;
// // person2.name = person1.name;
// // person2.address = person1.address;

// // ECMASCRIPT 2015
// // var person2 = Object.assign({}, person1);

// // ECMASCRIPT 2018
// var person2 = { ...person1 };

// // Deep Copy
// // var person2 = JSON.parse(JSON.stringify(person1));

// person2.name = "Abhijeet";
// person2.address.city = "Mumbai";

// console.log("Person 1", person1);
// console.log("Person 2", person2);

// -------------------------------------------------------- Object Destructuring With Rest

var person = { id: 1, ename: "Manish", city: "Pune", state: "MH", pin: 411028 };

// var id = person.id;
// var ename = person.ename;
// var address = {
//     city: person.city,
//     state: person.state,
//     pin: person.pin
// };

// ECMASCRIPT 2018
var { id, ename, ...address } = person;

console.log("Id:", id);
console.log("Name:", ename);
console.log("Address:", address);