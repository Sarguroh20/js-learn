// Function Definition
function sayMyName() {
    console.log("T");
    console.log("S");
}

// sayMyName()         // sayMyName - Function Reference, () - Execution

// Function Parameters & Function Arguments 
function adddTwoNumbers(number1, number2){          // (parameters)
    console.log(number1 + number2)
}

function adddTwoNumbersWithReturn(number1, number2){
    // let result = number1 + number2
    // return result;
    return number1 + number2
}

// adddTwoNumbers(1, 4)                             // (arguments)
// const result = adddTwoNumbers(1, 3)                 
// console.log("Result: ", result);
/*  Output: 4
            Result: undefined   */

const output = adddTwoNumbersWithReturn(2, 3)
// console.log("Result: ", output);                 // Result: 5

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username!");
//         return
//     }
//     return `${username} just logged in 🙂`
// }

// console.log(loginUserMessage("TS"))
// console.log(loginUserMessage())                  // undefined just logged in 🙂 [Without if statement]
// console.log(loginUserMessage());                 // Please enter a username!

// "", undefined are considered as false value
// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter your username!");
//         return        
//     }
//     return `${username} just logged in 🙂`;
// }

// console.log(loginUserMessage());                 // Please enter a username! 

// Providing Default values
function loginUserMessage(username = "Alice"){
    if(!username){
        console.log("Please enter your username!");
        return        
    }
    return `${username} just logged in 🙂`;
}

// console.log(loginUserMessage());                 // Alice just logged in 🙂
console.log(loginUserMessage("TS"));                // Override default values