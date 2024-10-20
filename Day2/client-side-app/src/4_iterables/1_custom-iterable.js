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

    [Symbol.iterator]() {
        let i = 0;
        const self = this;

        return {
            next: function () {
                let v, d = true;

                if (self._dataArray[i] !== undefined) {
                    v = self._dataArray[i];
                    d = false;
                    i += 1;
                }

                return {
                    value: v,
                    done: d
                };
            }
        };
    }
}

let ordersQ = new Queue();
ordersQ.push({ id: 1, details: "Order One" });
ordersQ.push({ id: 2, details: "Order Two" });
ordersQ.push({ id: 3, details: "Order Three" });

// console.log(ordersQ.pop());
// console.log(ordersQ.pop());
// console.log(ordersQ.pop());

for (const item of ordersQ) {
    console.log(item);
}

// const it = ordersQ[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// console.log(Object.getOwnPropertySymbols(Queue.prototype));

// var arr = new Array();
// console.log(Object.getOwnPropertyNames(arr));
// console.log(Object.getOwnPropertySymbols(arr));
// console.log(Object.getOwnPropertySymbols(Array.prototype));

// var person = {
//     id: 1,
//     name: "Manish",
//     [Symbol("username")]: "ManishS"
// };

// console.log(person);
// console.log(person.id);
// console.log(person.name);
// console.log(person[Symbol("username")]);