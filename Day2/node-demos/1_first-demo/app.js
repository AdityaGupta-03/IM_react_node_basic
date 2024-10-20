// console.log("Hello from Node App");
// console.log(process);
// console.log(process.cwd());

// console.log(module);

// var i = 0;

// setInterval(() => {
//     console.log(++i);
// }, 1000);

// let a = 10;
// console.log(a);
// console.log(typeof a);

// function add(x = 0, y = 0) {
//     return x + y;
// }

// console.log(add(2, 3));
// console.log(add(2));
// console.log(add());

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
