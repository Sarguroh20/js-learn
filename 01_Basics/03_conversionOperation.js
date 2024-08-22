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