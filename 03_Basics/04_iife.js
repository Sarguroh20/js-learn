// Immediately Invoked Function Expressions (IIFE)
// 2 Main Reasons for using IIFE: 1) To avoid pollution from global scope 2) Immediate Exceution of a function

// function coffee(){
//     console.log(`DB Connected`);
// }
// coffee()

(function coffee(){
    // Named IIFE
    console.log(`DB Connected`);
})();                                       // DB Connected

// Syntax: ()(); First Paranthesis: Function Definition | Second: Execution

// ( function cc (){
//     console.log(`DB Connected TWO`);
// })()                                     // DB Connected TWO

// IIFE USING ARROW FUNCTION
// (()=>{
//     console.log(`DB CONNECTED`);
// })()                                    // DB CONNECTED

((name) => {
    // Simple IIFE
    console.log(`Welcome ${name}!`);
})("Alice")

// 📝 Interview Q. Named IIFE & Simple IIFE (Un-named IIFE)