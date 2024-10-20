// console.log("This is the lib module");
// console.log(module);

// Local Variable
var fname = "Manish";
var lname = "Sharma";

// Nanmed Exports
module.exports.firstname = fname;
module.exports.lastname = lname;

// module.exports.log = function(msg) {
//     console.log("Logged from lib.js module - ", msg);
// }

module.exports.log = (msg) => {
    console.log("Logged from lib.js module - ", msg);
}

module.exports.Person = class Person {
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