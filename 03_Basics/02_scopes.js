// Global Scope
// var c = 300
let a = 300

// Block Scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner: ", a);       // Inner:  10
}

// console.log(a);                      // Error: a is not defined (Block Scope: Inside if statement a)
// console.log(b);                      // Error: b is not defined (Block Scope: Inside if statement b)
// console.log(c);                      // 30

// console.log("Outer: ", a);           // Outer:  300       

// 📝 Interview Q. Global Scope is different wrt browser & node code environment. 


// Nested Scope
function one(){
    const username = "Alice"

    function two(){
        const website = "google"
        console.log(username);
    }
    // console.log(website);            // Error: website is not defined

    two()
} 

// one()                                // Alice

if (true) {
    const username = "Alice"
    if (username === "Alice") {
        const website = " youtube"
        // console.log(username + website);        // Alice youtube
    }
    // console.log(website);            // Error: website is not defined
}
// console.log(username);               // Error: username is not defined


// 📌📌📌📌📌📌 Interesting Facts 📌📌📌📌📌📌

console.log(addone(5));                 // 6

function  addone(num){
    return num + 1
}

console.log(addTwo(5))                  // Error: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}