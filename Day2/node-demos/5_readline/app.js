const readline = require('readline');
// console.log(readline);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Please enter a number: ", (input)=>{
//     console.log("You entered: ", input);
//     rl.close();
// });

// console.log("\n------------ Last Line ------------\n");

// rl.question("Please enter the first number: ", (input1) => {
//     rl.question("Please enter the second number: ", (input2) => {
//         var sum = parseInt(input1) +  parseInt(input2);
//         console.log("Sum is: ", sum);
//         rl.close();
//     });
// });

// -------------------------- Using Promise Chaining

// function enterNumberOne() {
//     return new Promise((resolve) => {
//         rl.question("Please enter the first number: ", (input) => {
//             var num = parseInt(input);
//             resolve(num);
//         })
//     })
// }

// function enterNumberTwo(n1) {
//     return new Promise((resolve) => {
//         rl.question("Please enter the second number: ", (input) => {
//             var num = parseInt(input);
//             resolve([n1, num]);
//         })
//     })
// }

// function add([n1, n2]) {
//     var sum = n1 + n2;
//     console.log("Sum is:", sum);
//     rl.close();
// }

// enterNumberOne().then(enterNumberTwo).then(add);

// -------------------------------------- Async Await

function enterNumber(message) {
    return new Promise((resolve) => {
        rl.question(message, (input) => {
            var num = parseInt(input);
            resolve(num);
        })
    })
}

(async function(){
    var n1 = await enterNumber("Enter the first number: ");
    var n2 = await enterNumber("Enter the second number: ");
    var sum = n1 + n2;
    console.log("Sum is:", sum);
    rl.close();
})();