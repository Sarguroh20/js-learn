// Based on how data is stored & accessed in the memory it is categorized into two types: Primitive  & Non-Primitive
// PRIMITIVE (Call by Value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Js- Dynamically typed language

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356745n      // BigInt


// Reference Type (NON-PRIMITIVE)

// Array, Objects, Functions

const deserts = ["cake", "smoothie", "shakes"];
let myObj = {
    name: "ts",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World!");
}
myFunction();

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof id);
console.log(typeof myFunction);
console.log(typeof deserts);


// 📌📌📌📌📌📌 Memory 📌📌📌📌📌📌
// Stack (Primitive), Heap (Non-Primitive)

let myYT = "onlyabt"
let anothermyYT = myYT;
anothermyYT = "New Channel"

console.log(myYT);
console.log(anothermyYT);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@google.com"

console.log(userOne.email);
console.log(userTwo.email);