const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email"); 
}

// "" -> false | "alice@email.com", [] -> true

// 🗒️Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// 🗒️Truthy values

// "0", 'false', " ", [], {}, function(){}

// Detecting whether Array /  Object is empty or not
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// 📝Interview Q. false == 0, false == '', 0 == '' -> true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10                           // 5
// val1 = null ?? 10                        // 10
// val1 = undefined ?? 15                   // 15
// val1 = null ?? 10 ?? 15                  // 10

// console.log(val1);

// Ternary Operator

// condition ? true : false

const icecreamPrice = 100
icecreamPrice >= 80 ? console.log("Costly") : console.log("Affordable");
