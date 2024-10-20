// function square(x) {
//     return x * x;
// }

// Case 1 - Default Export
// export default function square(x) {
//     return x * x;
// }

// Case 2 - Named Export
// export function square(x) {
//     return x * x;
// }

// Case 3 - Multiple Exports
// Only one default export allowed per module. 
// export default function square(x) {
//     return x * x;
// }

// export function check(x) {
//     return `Checked: ${x}`;
// }

// export function test(x) {
//     return `Tested: ${x}`;
// }

// Create a Class Person and Export

export default class Person {
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