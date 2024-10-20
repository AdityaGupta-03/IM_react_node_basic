// // Eager Execution
// function idGen() {
//     console.log("idGen Function Executed...");
// }

// idGen();

// // Lazy Execution
// function* idGenerator() {
//     console.log("idGenerator Function Executed...");
// }

// idGenerator();

// // ----------------------------------------------
// function* idGenerator() {
//     console.log("idGenerator Function Executed...");
// }

// let genObject = idGenerator();
// // console.log(genObject);
// console.log(genObject.next());

// ----------------------------------------------
// function* idGenerator() {
//     console.log("idGenerator Function Execution Started...");
//     yield 1;
//     yield 2;
//     yield 3;
//     console.log("idGenerator Function Execution Finished...");
// }

// let genObject = idGenerator();
// // console.log(genObject);
// console.log(genObject.next());
// console.log(genObject.next());
// console.log(genObject.next());
// console.log(genObject.next());

// ---------------------------------------------

// class Queue {
//     constructor() {
//         this._dataArray = [];
//     }

//     push(data) {
//         this._dataArray.push(data);
//     }

//     pop() {
//         return this._dataArray.shift();
//     }

//     *[Symbol.iterator]() {
//         for (let i = 0; i < this._dataArray.length; i++) {
//             yield this._dataArray[i];
//         }
//     }
// }

class Queue {
    constructor() {
        this._dataArray = [];
    }

    push(data) {
        this._dataArray.push(data);
    }

    pop() {
        return this._dataArray.shift();
    }

    *[Symbol.iterator]() {
        yield* this._dataArray;
    }
}

let ordersQ = new Queue();
ordersQ.push({ id: 1, details: "Order One" });
ordersQ.push({ id: 2, details: "Order Two" });
ordersQ.push({ id: 3, details: "Order Three" });

for (const item of ordersQ) {
    console.log(item);
}
