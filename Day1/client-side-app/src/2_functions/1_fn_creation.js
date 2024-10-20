// // Declaration Syntax (Is Hoisted)

// function hello1() {
//     console.log("Hello 1 from JavaScript World!");
// }

// hello1();

// // Expression Syntax (Is not Hoisted)

// const hello2 = function() {
//     console.log("Hello 2 from JavaScript World!");
// }

// hello2();

// // Constructor Syntax (Is not Hoisted)

// const hello3 = new Function('console.log("Hello 3 from JavaScript World!");');
// hello3();

// // Arrow Syntax (Is not Hoisted) - ES6
// const hello4 = () => {
//     console.log("Hello 4 from JavaScript World!");
// }

// hello4();

// -----------------------------------------------------------

var i = 10;
console.log("i is: ", i);
console.log("type of i is: ", typeof i);

var f = function () {
    console.log("Hello");
};
console.log("f is: ", f);
console.log("type of f is: ", typeof f);

// Function is a type, which can refer to a block of code, same like delegates or Function Pointers

// Can we create a variable of type number?
// If yes; we should be able to create a variable of type function also

// Can we create a variable of type number inside a function?
// If yes; we should be able to create a variable of type function inside a function also (Nested Functions)
// function f1() {
//     function f2() {

//     }
// }

// Can we return a variable of type number from a function?
// If yes; we should be able to return a variable of type function from a function also (Closures/Currying/HOF)
// function f1() {
//     function f2() {

//     }

//     return f2;
// }

// Can we pass a variable of type number to a function as argument?
// If yes; we should be able to pass a variable of type function to a function also (Callbacks)
// function f1() {

// }

// f1(function () { });