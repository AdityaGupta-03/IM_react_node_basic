'use strict'

// var count = 0;

// function next() {
//     return count += 1;
// }

// setInterval(() => {
//     console.log(next());
// }, 2000);

// setTimeout(() => {
//     count = "abc";
// }, 5000);

// ---------------------------------

// function next() {
//     var count = 0;
//     return count += 1;
// }

// setInterval(() => {
//     console.log(next());
// }, 2000);

// // setTimeout(() => {
// //     count = "abc";
// // }, 5000);

// ---------------------------------

// function getNext() {
//     var count = 0;

//     return function () {
//         return count += 1;
//     }
// }

// const next = getNext();

// setInterval(() => {
//     console.log(next());
// }, 2000);

// ---------------------------------

// const next = (function () {
//     var count = 0;

//     return function () {
//         return count += 1;
//     }
// })();

// setInterval(() => {
//     console.log(next());
// }, 2000);

// ---------------------------------

const counter = (function () {
    var count = 0;

    return {
        next: function () {
            return count += 1;
        },
        prev: function () {
            return count -= 1;
        }
    };
})();

setInterval(() => {
    console.log(counter.next());
}, 2000);

setInterval(() => {
    console.log(counter.prev());
}, 2000);