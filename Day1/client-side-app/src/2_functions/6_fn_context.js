// 'use strict'

// function test1() {
//     console.log(this);
// }

// test1();

// const test2 = function () {
//     console.log(this);
// }

// test2();

// var self = this;
// console.log("File Context: ", this);

// // In ES6, arrow functions use lexical scoping — ‘this’ refers to it’s current surrounding scope and no further.
// const test3 = () => {
//     console.log(this);
//     console.log(self === this);
// }

// test3();

// -----------------------------------

var person = {
    age: 0,
    growOld: function () {
        console.log("growOld exceuted, under context:", this);
        this.age += 1;
    }
};

// console.log(person.age);

// person.growOld();
// console.log(person.age);

// person.growOld();
// console.log(person.age);

// person.growOld();
// console.log(person.age);

// -------------------------------------
// In ES ‘this’ refers to the parent of the function and the object through which the function was called (invoked)

// var btn = document.createElement("button");
// btn.className = "btn btn-primary btn-block";
// btn.innerHTML = "Click";

// var btnArea = document.getElementById("btnArea");
// btnArea.appendChild(btn);

// // btn.addEventListener("click", person.growOld);
// btn.addEventListener("click", person.growOld.bind(person));

// window.setInterval(person.growOld.bind(person), 1000);

// ----------------------------------------------------

// var p1 = {
//     id: 1,
//     name: "Manish",
//     toJson: function () {
//         console.log(JSON.stringify(this));
//     }
// };

// var p2 = {
//     id: 2,
//     name: "Abhijeet",
//     toJson: function () {
//         console.log(JSON.stringify(this));
//     }
// };

// p1.toJson();
// p2.toJson();

// -------------------------------------
function toJson(x,y) {
    console.log(JSON.stringify(this));
}

var p1 = {
    id: 1,
    name: "Manish"
};

var p2 = {
    id: 2,
    name: "Abhijeet"
};

toJson.call(p1, 1, 2);
// toJson.call(p2);

toJson.apply(p1, [1, 2]);
// toJson.apply(p2);

p1.toJson = toJson.bind(p1);
p2.toJson = toJson.bind(p2);

p1.toJson();
p2.toJson();