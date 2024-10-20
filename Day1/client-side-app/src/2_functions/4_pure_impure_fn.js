// Impure Functions

// Modifying any external variable or object property
// Logging Data to the console
// Writing Data to a file
// Writing Data to the network
// Trigerring an external process
// Calling any other function with impurity
// Making Async Data Calls

var a = [10, 20, 30];

// Impure
// function append(dataArr, x) {
//     dataArr[dataArr.length] = x;
//     return dataArr;
// }

// Pure
function append(dataArr, x) {
    let rArr = [...dataArr];
    rArr[rArr.length] = x;
    return rArr;
}

var newArr1 = append(a, 100);
console.log(newArr1);               // Expected - [10, 20, 30, 100]

var newArr2 = append(a, 100);
console.log(newArr2);               // Expected - [10, 20, 30, 100]