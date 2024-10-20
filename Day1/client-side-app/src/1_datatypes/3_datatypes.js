// var a = 10;
// var b = "10";

// // console.log(typeof a);
// // console.log(typeof b);

// console.log(a == b);              // Abstract Equality
// console.log(a === b);             // Strict Equality

// var a = { id: 10 };
// var b = { id: 10 };

// console.log(a == b);              // Abstract Equality
// console.log(a === b);             // Strict Equality

// var c = b;
// console.log(b == c);              // Abstract Equality
// console.log(b === c);             // Strict Equality

// -----------------------------------------

// const color = "red";

// function check(str) {
//     console.log(str === color);
// }

// check(color);

// check("red");
// var clr = "red";
// check(clr);

// -------------------------------- Use Mutable (Object)

// const color = { c: "red" };

// function check(str) {
//     console.log(str === color);
// }

// check(color);

// check({ c: "red" });
// var clr = { c: "red" };
// check(clr);

// ------------------------------------- ES6 - Symbol (Unique Immutables)

const color = Symbol("red");

function check(str) {
    console.log(str === color);
}

check(color);

check(Symbol("red"));
var clr = Symbol("red");
check(clr);