let score = null

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a Number); "abc" => NaN
// true => 1; false => 0
// null => 0; undefined => NaN

let isLoggedIn = "ts"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ts" => true

let someNumber = 50

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// 📌📌📌📌📌📌 Operations 📌📌📌📌📌📌

let value = 3
let negValue = -value
console.log(negValue);

// Basic Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " students"

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);       // 12
// console.log(1 + "2");       // 12
// console.log("1" + 2 + 2);   // 122
// console.log(1 + 2 + "2");   // 32

// console.log((3 + 4) * 5 % 3);

// console.log(true);           // true
// console.log(+true);          // 1
// console.log(+"");            // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2  // Output of all: 4

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);    // 101