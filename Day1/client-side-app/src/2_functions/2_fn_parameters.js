// Function Creation
// function <FunctionName>(<Parameters>) {
//     <Function Body>
// }

// Function Call
// <FunctionName>(<Arguments>)

// function hello(person_name) {
//     console.log(`Hello, ${person_name}`);
// }

// hello("Indiamart");
// hello();
// hello("Manish", "Pune");
// hello(10);

// --------------------------------------- Handle Less number of Arguments

// Function to add 2 numbers
// function add(x, y) {
//     // x = x || 0;
//     // y = y || 0;

//     if (x === void 0) x = 0;
//     if (y === void 0) y = 0;

//     if ((typeof x == "number") && (typeof y == "number"))
//         return x + y;
//     else
//         throw new TypeError("Invalid Paramater type...")
// }

// ---------------------------------------------- ES 2015 (Default Parameters)
// function add(x = 0, y = 0) {
//     if ((typeof x == "number") && (typeof y == "number"))
//         return x + y;
//     else
//         throw new TypeError("Invalid Paramater type...")
// }

// console.log(add(2, 3));
// console.log(add(2));
// console.log(add());

// try {
//     console.log(add(2, "abc"));
// } catch (e) {
//     console.error(e.message);
// }

// --------------------------------------- Handle Extra number of Arguments
// function hello(person_name) {
//     console.log(`Hello, ${person_name}`);
//     console.log(arguments);
// }

// hello("Manish");
// hello("Manish", "Sharma");
// hello("Manish", "Sharma", "Pune");
// hello("Manish", "Sharma", "Pune", 411021);

// ECMASCRIPT 2015 - Rest Parameters (Coverts comma seperated items to an array)
// function hello(person_name, ...args) {
//     console.log(`Hello, ${person_name}`);
//     console.log(args);
// }

// hello("Manish");
// hello("Manish", "Sharma");
// hello("Manish", "Sharma", "Pune");
// hello("Manish", "Sharma", "Pune", 411021);

// -------------------------------------------------------- Variable Argument Method
function average(...numbers) {
    // console.log(numbers);
    var sum = 0;

    for (const n of numbers) {
        sum += n;
    }

    if (numbers.length)
        return sum / numbers.length;
    else
        return sum;
}

console.log(average());
console.log(average(1));
console.log(average(1, 2));
console.log(average(1, 2, 3, 4, 5));
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(average(...arr));                   // Array Spread

// Rest - Combine to Array
// Spread - Split an Array

// If I use ... in Function Parameter (Rest)
// If I use ... in Function Call (Spread)

// If I use ... on Lefthand side of assignmnet Operator (Rest)
// If I use ... on Righthand side of assignmnet Operator (Spread)