console.log("Hello from the Main File");

const obj = {
    arr: [1, 2, 3, 4, 5],
    printArr() {
        console.log(...this.arr);               // Array Spread (ECMASCRIPT 2015)
    }
};

obj.printArr();