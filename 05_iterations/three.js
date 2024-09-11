// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
}

const greetings = "HELLO WORLD!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps - Store Unique Values

const map = new Map()
map.set('KSA', "Kingdom of Saudi Arabia")
map.set('IN', "India")
map.set('US', "United States of America")

// console.log(map);
/* Output: Map(3) {
  'KSA' => 'Kingdom of Saudi Arabia',
  'IN' => 'India',
  'US' => 'United States of America'
}   */


for (const key of map) {
    // console.log(key);
}
/*  [ 'KSA', 'Kingdom of Saudi Arabia' ]
[ 'IN', 'India' ]
[ 'US', 'United States of America' ]    */

for (const [key, value] of map) {
    // console.log(key, ':', value);
}
/*  KSA : Kingdom of Saudi Arabia
IN : India
US : United States of America   */

const myObject = {
    game1: 'Big Farm',
    game2: 'Lightning Speed'
}

for (const [key, value] of myObject) {
    // console.log(key, ':', value);            // Error: myObject is not iterable
}