// var mySet = new Set();

// // console.log(mySet);
// // console.log(typeof mySet);
// // console.log(mySet.size);

// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(4);
// mySet.add(5);

// for (const item of mySet) {
//     console.log(item);
// }

// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(6);
// mySet.add(7);

// console.log("\nAfter Adding New Data:");
// for (const item of mySet) {
//     console.log(item);
// }

var arr = [10, 20, 30, 40, 50, 30, 40, 50, 11, 60, 70, 99];

// var mySet = new Set(arr);
// // console.log(mySet);

// var unique = Array.from(mySet);
// console.log(unique);

var unique = Array.from(new Set(arr));
console.log(unique);