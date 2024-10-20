// Create a BankAccount Class with bankName and accName as data properties and create accessor properties 
// to access the data outside using instance.

// class BankAccount {
//     constructor(bankName, accName) {
//         this._bankName = bankName;
//         this._accName = accName;
//     }

//     get BankName() {
//         return this._bankName;
//     }

//     set BankName(value) {
//         this._bankName = value;
//     }

//     get AccountName() {
//         return this._accName;
//     }
// }

// var a1 = new BankAccount("HDFC", "Manish");
// console.log(a1.BankName);
// console.log(a1.AccountName);

// var a2 = new BankAccount("HDFC", "Abhijeet");
// console.log(a2.BankName);
// console.log(a2.AccountName);

// console.log(a1);
// console.log(a2);

// ------------------------------------------------------------- Static
class BankAccount {
    static _bankName = "HDFC";

    constructor(accName) {
        this._accName = accName;
    }

    get BankName() {
        return BankAccount._bankName;
    }

    static set BankName(value) {
        BankAccount._bankName = value;
    }

    get AccountName() {
        return this._accName;
    }
}

BankAccount.BankName = "ICICI";

var a1 = new BankAccount("Manish");
console.log(a1.BankName);
console.log(a1.AccountName);

var a2 = new BankAccount("Abhijeet");
console.log(a2.BankName);
console.log(a2.AccountName);

console.log(a1);
console.log(a2);