const deserts = ["Cake", "Icecream", "Macron"]
const juices = ["Shakes", "Smoothies", "Juices"]

// deserts.push(juices)

// console.log(deserts);                    // [ 'Cake', 'Icecream', 'Macron', [ 'Shakes', 'Smoothies', 'Juices' ] ]
// console.log(deserts[3]);                 // [ 'Shakes', 'Smoothies', 'Juices' ]
// console.log(deserts[3][1]);              // Smoothies

// const dishes = deserts.concat(juices)   
// console.log(dishes);                     // [ 'Cake', 'Icecream', 'Macron', 'Shakes', 'Smoothies', 'Juices' ]

// Spread Operator
const all_new_dishes = [...deserts, ...juices]
// console.log(all_new_dishes);             // [ 'Cake', 'Icecream', 'Macron', 'Shakes', 'Smoothies', 'Juices' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_another_array = another_array.flat(Infinity)
// console.log(usable_another_array);      
/* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
*/

// console.log(Array.isArray("TS"))         // false
// console.log(Array.from("TS"));           // [ 'T', 'S' ]
// console.log(Array.from({name: "TS"}));   // [] 📝 Interview Q. Can't convert object directly into an array you have to specify array of keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]