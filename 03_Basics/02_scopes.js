// Global Scope
// var c = 300
let a = 300

// Block Scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ", a);  
}

// console.log(a);          // Error: a is not defined (Block Scope: Inside if statement a)
// console.log(b);          // Error: b is not defined (Block Scope: Inside if statement b)
// console.log(c);          // 30

console.log("Outer: ", a);             

// 📝 Interview Q. Global Scope is different wrt browser & node code environment. 