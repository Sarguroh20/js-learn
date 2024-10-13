const myArr = []
// %DebugPrint(myArr)

// 📑 Notes: 
// 2 Types of Array in Js: Continuous & Holey

// Array Optimization based on its types: 
// 1. SMI (small integer)
// 2. Packed Element
// 3. Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]          // PACKED_SMI_ELEMENTS (By Default)

arrTwo.push(6.0)                        // PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')                        // PACKED_ELEMENTS

arrTwo[10] = 11                         // HOLEY_ELEMEMTS

console.log(arrTwo);                    // Output: [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
console.log(arrTwo.length);             // 11
console.log(arrTwo[9]);                 // undefined

// Bound Check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// hasOwnProperty() itself is an expensive check
// Holes are very expensive in js, you want to do above checks for it

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[8]);

// OPTIMIZATION ORDER
// SMI > DOUBLE > PACKED (Continuous) Highest optimized: SMI then Double then Packed
// SMI > DOUBLE > PACKED (Holey)

// Once downgraded, upgrade not possible

// 30 variations...

const arrFour = new Array(3)
// Just 3 holes | HOLEY_SMI_ELEMENTS
console.log(arrFour);

arrFour[0] = '1'                    // HOLEY_ELEMENTS (Downgrade)
arrFour[1] = '2' 
arrFour[2] = '3' 

const arrFive = []                  // More optimized than new Array (SMI_ELEMENTS)
arrFive.push('1')                   // PACKED_ELEMENTS
arrFive.push('2')                   // PACKED_ELEMENTS
arrFive.push('3')                   // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]      // PACKED_SMI_ELEMEMT
arrSix.push(NaN)                    // PACKED_DOUBLE
arrSix.push(Infinity)                    // PACKED_DOUBLE