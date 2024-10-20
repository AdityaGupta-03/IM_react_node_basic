'use strict'
// console.log("Hello from Declarations File");

// a = 10;
// console.log("a is: ", a);

// function test() {
//     a = 10;
//     console.log("Inside test(), a is: ", a);
// }

// test();
// console.log("Outside test(), a is: ", a);

// ---------------------------------

// var a = 10;
// console.log("a is: ", a);

// function test() {
//     var a = 10;
//     console.log("Inside test(), a is: ", a);
// }

// test();
// console.log("Outside test(), a is: ", a);

// Hoisting - Hoisting is JavaScript Runtime's default behavior of moving declarations to the top
// a = 10;
// console.log("a is: ", a);
// var a;

// // Definitions / Initializations are not hoisted
// console.log("b is: ", b);
// var b = 20;

// // Runtime sees the following code
// var b;
// console.log("b is: ", b);
// b = 20;

// Not TypeSafe
// var a = 10;
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// a = "manish";
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// var a = 10;
// var a = "manish";
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// Only Global (Global to the file) and Function Scope is supported when using var keyword

// Global to the module (file)
// var a = 10;

// function test() {
//     console.log("Inside test(), a is: ", a);
// }

// test();
// console.log("Outside test(), a is: ", a);

// var a = 10;

// function test() {
//     var a = 100;        // Function Scoped
//     console.log("Inside test(), a is: ", a);
// }

// test();
// console.log("Outside test(), a is: ", a);

// var keyword does not support Block Scoping

// var a = 10;

// function test() {
//     if (true) {
//         var a = 100;        // Function Scoped
//         console.log("Inside if block(), a is: ", a);
//     }
//     console.log("Inside test(), a is: ", a);
// }

// test();
// console.log("Outside test(), a is: ", a);

var i = "Hello";
console.log("Before, i:", i);

// for (var i = 0; i < 5; i++) {
//     console.log("Inside Loop, i:", i);
// }

// for (var _i = 0; _i < 5; _i++) {
//     console.log("Inside Loop, _i:", _i);
// }

// function iterate() {
//     for (var i = 0; i < 5; i++) {
//         console.log("Inside Loop, i:", i);
//     }
// }

// iterate();

// IIFE - Immediatly Invoked Function Expression
(function () {
    for (var i = 0; i < 5; i++) {
        console.log("Inside Loop, i:", i);
    }
})();

console.log("After, i:", i);
