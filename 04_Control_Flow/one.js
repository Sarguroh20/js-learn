// if

const isUserLoggedIn = true
// const temperatue = 27

// if (temperatue === 30) {
//     console.log("Less than 27");
// }
// else {
//     console.log("Temperature is greater than 27");
// }
// console.log("Execution done");

// <, >, <=, >=, ==, !=, ===, !== 

// Block Scope
// Use let & const instead of var
// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);   
// }
// console.log(`User power: ${power}`);   

// Shorthand notation - Implicit Scope
// const balance = 1000
// if(balance > 500) console.log("You've money!💸");

// if(balance < 500) console.log("You're running out of cash!"),
// console.log("Earn some");                // Unreadable Code

// if(balance < 500){
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 3==3) {
    console.log("Allow to buy courses"); 
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); 
}