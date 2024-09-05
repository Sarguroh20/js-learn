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


// ... -> Rest & Spread Operator but with different usecase
// function calculateCartPrice(...num1){            // Here rest operator
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))     // [ 200, 400, 500, 2000 ]

// 📝 Interview Q. What values will num1 hold?
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));       // [ 500, 2000 ]

const user = {
    username: "TS",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)                               // Username is TS and price is 199
handleObject({
    username: "Alice",
    price: 399
})                                                  // Username is Alice and price is 399

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1] 
}

// console.log(returnSecondValue(myNewArray));      // 400
console.log(returnSecondValue([200, 400, 100, 600]));
