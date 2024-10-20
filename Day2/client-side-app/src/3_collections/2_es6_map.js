// Dictionary (Key and Value)

var myMap = new Map();

// console.log(myMap);
// console.log(typeof myMap);
// console.log(myMap.size);

const o = {};
const f = function () { };

myMap.set('the string', 'This is the value for the string key');
myMap.set(o, 'This is the value for the object key');
myMap.set(f, 'This is the value for the function key');

// console.log(myMap);
// console.log(myMap.size);

// console.log(myMap.get('the string'));
// console.log(myMap.get(o));
// console.log(myMap.get(f));

// for (const pair of myMap) {
//     console.log(pair);
// }

// for (const [key, value] of myMap) {
//     console.log(`${key}             ${value}`);
// }

// for (const key of myMap.keys()) {
//     console.log(`${key}`);
// }

// for (const value of myMap.values()) {
//     console.log(`${value}`);
// }

// Create a object to store contact details

// ES 5
// var phoneDirectory = [
//     { name: "Manish", phone: 12345 },
//     { name: "Abhijeet", phone: 54321 },
// ];

var phoneDirectory = {
    Manish: 12345,
    Abhijeet: 12345
};

// ES 2015
var phoneDirectoryMap = new Map();
phoneDirectoryMap.set("Manish", 12345);
phoneDirectoryMap.set("Abhijeet", 54321);

if (phoneDirectoryMap.has("Abhijeet"))
    console.log(phoneDirectoryMap.get("Abhijeet"));