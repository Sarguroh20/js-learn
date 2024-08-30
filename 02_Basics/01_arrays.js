// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myDeserts = ["Icecream", "Cake"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);           
// console.log(myArr2);                 // [ 1, 2, 3, 4 ]

// 📝 Interview Q. JavaScript array-copy operations create shallow copies rather than deep copies.
// Shallow Copies - Call by Reference | Deep Copies - Call by Value 

 // Array Methods

//  myArr.push(6)                       // [0, 1, 2, 3, 4, 5, 6]
//  myArr.push(7)                       // [0, 1, 2, 3, 4, 5, 6, 7]
//  myArr.pop()                         // [0, 1, 2, 3, 4, 5, 6]

// myArr.unshift(9)                     // [9, 0, 1, 2, 3, 4, 5]
// myArr.shift()                        // [1, 2, 3, 4, 5]

// console.log(myArr.includes(9));      // false             
// console.log(myArr.indexOf(9));       // -1
// console.log(myArr.indexOf(4));       // 4

const newArr = myArr.join()

// console.log(myArr);                  // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);                 // 0,1,2,3,4,5
// console.log(typeof newArr);          // string

// slice, splice

console.log("A ", myArr);               // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)
console.log(myn1);                      // [ 1, 2 ]
console.log("B ", myArr);               // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);               // C  [ 0, 4, 5 ]
console.log(myn2);                      // [ 1, 2, 3 ]

// 📝 Interview Q. Which operation manipulate original array -> Splice not Slice