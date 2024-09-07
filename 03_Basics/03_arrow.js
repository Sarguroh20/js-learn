// this - refers to current context

const user = {
    username: "Alice",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username} , Welcome to website`);   
        console.log(this);
        
    }
}

// user.welcomeMessage()                       // Alice , Welcome to website
// user.username = "Bob"
// user.welcomeMessage()                       // Bob , Welcome to website

// console.log(this);                          // {}
// 📝 Interview Q. The above line when executed in node environment gives an empty object whereas in browser inspect it gives a window object as a global object.

// function coffee(){
//     let username = "Alice"
//     console.log(this.username);             // undefined
// }
// coffee()

// const coffee = function(){
//     let username = "Alice"
//     console.log(this.username);
// }
// coffee()                                    // undefined

// Arrow Function
const coffee = () => {
    let username = "Alice"
    console.log(this.username);                // undefined
    console.log(this);                         // {}
}
// coffee()

// Explicit return - use of return keyword inside {}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2, 5))

// Implicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(1, 6));

// Returning an Object
const myobj = () => ({name: "Alice"})
console.log(myobj())                            // { name: 'Alice' }