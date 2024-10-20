// function greetings(message, name) {
//     console.log(`${message}, ${name}`);
// }

// greetings("Good Morning", "Abhijeet");
// greetings("Good Morning", "Ramakant");
// greetings("Good Morning", "Subodh");

// function Converter(toUnit, factor, offset, input) {
//     return [((offset + input) * factor).toFixed(2), toUnit].join("");
// }

// console.log(Converter(" INR", 79.90, 0, 100));
// console.log(Converter(" INR", 79.90, 0, 250));
// console.log(Converter(" INR", 79.90, 0, 699));
// console.log(Converter(" INR", 79.90, 0, 999));

// -------------------------------------------------- Currying

function greetings(message) {
    return function (name) {
        console.log(`${message}, ${name}`);
    }
}

// const mGreet = greetings("Good Morning");
// mGreet("Abhijeet");
// mGreet("Ramakant");
// mGreet("Subodh");

function Converter(toUnit, factor, offset) {
    return function(input) {
        return [((offset + input) * factor).toFixed(2), toUnit].join("");
    }
}

const usdToInrConverter = Converter(" INR", 79.90, 0);
console.log(usdToInrConverter(100));
console.log(usdToInrConverter(250));
console.log(usdToInrConverter(599));
console.log(usdToInrConverter(999));

const milesToKmConverter = Converter(" KM", 1.6, 0);
console.log(milesToKmConverter(100));
console.log(milesToKmConverter(250));
console.log(milesToKmConverter(599));
console.log(milesToKmConverter(999));
