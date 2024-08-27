const score = 400
// console.log(score);                                  // 400

const balance = new Number(100)
console.log(balance);

// console.log(balance.toString().length);              // 3
// console.log(balance.toFixed(2));                     // 100.00

const otherNumber = 1123.8966;
// console.log(otherNumber.toPrecision(3));             // 1.12e+3
//23.8966 -> 23.9, 123.8966 -> 124 with a precision as 3

const hundreds = 1000000
// console.log(hundreds.toLocaleString());              // Default (US-Standard): 1,000,000
// console.log(hundreds.toLocaleString('en-IN'));       // 10,00,000 -> Based on Indian Number System 

// 📌📌📌📌📌📌 Maths 📌📌📌📌📌📌

console.log(Math);
// console.log(Math.abs(-4));                           // 4 (Only negative to positive)
// console.log(Math.round(4.5));                        // 5
console.log(Math.ceil(4.2));                            // 5 (Top value)
console.log(Math.floor(4.9));                           // 4 (Lowest value)
// console.log(Math.min(1, 7, 3, 9));                   // 1
// console.log(Math.max(1, 7, 3, 9));                   // 0

console.log(Math.random());                             // Value between 0 & 1
console.log((Math.random()*10) + 1);                    // Value between 1 to 9
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);