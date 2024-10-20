'use strict'

// let keyword is not hoisted
// a = 10;
// console.log("a is: ", a);
// let a;

// Not TypeSafe
// let a = 10;
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// a = "manish";
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// Cannot create variables with same name in the same scope
// let a = 10;
// let a = "manish";
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// ECMASCRIPT 2015, with let keyword we get
// Global Scope (Global to this file)
// Function (Local) Scope
// Block Scope

// let a = 10;

// function test() {
//     let a = 100;        // Function Scoped

//     if (true) {
//         let a = 1000;        // Block Scoped
//         console.log("Inside if block(), a is: ", a);
//     }
//     console.log("Inside test(), a is: ", a);
// }

// test();
// console.log("Outside test(), a is: ", a);

// var i = "Hello";
// console.log("Before, i:", i);

// for (let i = 0; i < 5; i++) {
//     console.log("Inside Loop, i:", i);
// }

// console.log("After, i:", i);

// -----------------------------------------------

// let i;
// i = 10;
// console.log("i is:", i);

// // const e;            // Error: Missing initializer in const declaration.
// const e = "prod";
// // e = "dev";              // Error: Assignment to constant variable.
// console.log("e is:", e);

// if (true) {
//     const e = "dev";
//     console.log("Inside block, e is:", e);
// }

const obj = { id: 1, name: "Manish" };
console.log(obj);

obj.id = 1000;
console.log(obj);

delete obj.name;
console.log(obj);

obj.city = "Pune";
console.log(obj);

// obj = {};               // Error: Assignment to constant variable.
// console.log(obj);