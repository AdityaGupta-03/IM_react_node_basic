'use strict'
// Contructor Function
// function Person(name) {
//     this._name = name;

//     this.getName = function() {
//         return this._name;
//     }

//     this.setName = function(value){
//         this._name = value;
//     }
// }

// var p1 = new Person("Manish");
// console.log(p1.getName());
// p1.setName("Abhijeet");
// console.log(p1.getName());

// var p2 = new Person("Subodh");
// console.log(p2.getName());
// p2.setName("Ramakant");
// console.log(p2.getName());

// console.log(p1);
// console.log(p2);

// // 240 bytes

// // ----------------------------------------------

// const Person = (function () {
//     function Person(name) {
//         this._name = name;
//     }

//     Person.prototype.getName = function () {
//         return this._name;
//     }

//     Person.prototype.setName = function (value) {
//         this._name = value;
//     }

//     return Person;
// })();

// var p1 = new Person("Manish");
// console.log(p1.getName());
// p1.setName("Abhijeet");
// console.log(p1.getName());

// var p2 = new Person("Subodh");
// console.log(p2.getName());
// p2.setName("Ramakant");
// console.log(p2.getName());

// console.log(p1);
// console.log(p2);

// // 96 bytes

// // ---------------------------------------------- ECMASCRIPT 2015

class Person {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }
}

var p1 = new Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("Subodh");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());

console.log(p1);
console.log(p2);

// // 96 bytes

// ---------------------------------------------- ECMASCRIPT 2015 - Wrong Code

// class Person {
//     constructor(name) {
//         this._name = name;
//     }

//     // Never use Anonymous Fn / Arrow Fn for writing Methods in a class
//     getName = () => {
//         return this._name;
//     }

//     // Never use Anonymous Fn / Arrow Fn for writing Methods in a class
//     setName = (value) => {
//         this._name = value;
//     }
// }

// var p1 = new Person("Manish");
// console.log(p1.getName());
// p1.setName("Abhijeet");
// console.log(p1.getName());

// var p2 = new Person("Subodh");
// console.log(p2.getName());
// p2.setName("Ramakant");
// console.log(p2.getName());

// console.log(p1);
// console.log(p2);

// // 96 bytes