// const Person = (function () {
//     function Person(name) {
//         // Data Property
//         this._name = name;
//     }

//     // Accessor Property
//     Object.defineProperty(Person.prototype, "Name", {
//         get: function () {
//             return this._name;
//         },
//         set: function (value) {
//             this._name = value;
//         }
//     });

//     return Person;
// })();

// var p1 = new Person("Manish");
// console.log(p1.Name);
// p1.Name = "Abhijeet";
// console.log(p1.Name);

// ---------------------------------------------------------- ECMASCRIPT 2015
class Person {
    constructor(name, age = 0) {
        this._name = name;
        this._age = age;
    }

    get Name() {
        return this._name;
    }

    set Name(value) {
        this._name = value;
    }

    get Age() {
        return this._age;
    }

    set Age(value) {
        this._age = value;
    }
}

var p1 = new Person("Manish");
console.log(p1.Name);
console.log(p1.Age);
p1.Name = "Abhijeet";
p1.Age = 40;
console.log(p1.Name);
console.log(p1.Age);
