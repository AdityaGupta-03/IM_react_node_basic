function getData() {
    var promise = new Promise((resolve, reject) => {
        // Async Code
        setTimeout(function () {
            resolve({ id: 1, name: "Manish" });
            // reject("Some Error...");
        }, 5000);
    });
    return promise;
}

var promise = getData();

// promise.then((data) => {
//     console.log("Success: ", data);
// }, (err) => {
//     console.error("Error: ", err);
// });

// promise.then((data) => {
//     console.log("Success: ", data);
// }).catch((err) => {
//     console.error("Error: ", err);
// });

// ECMASCRIPT 2018 - Promise finally
promise.then((data) => {
    console.log("Success: ", data);
}).catch((err) => {
    console.error("Error: ", err);
}).finally(() => {
    console.warn("Finally will always run");
});

// console.log("Hello");