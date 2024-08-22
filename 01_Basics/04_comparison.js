// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);    // true
// console.log("02" > 1);   // true

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);     // true (Reason: Equality check & Comparison treat differently)

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === => Strict Check
console.log("2" === 2);