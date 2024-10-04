let myName = "TS     "

// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ts = function(){
    console.log(`TS is present in all objects😉`);   
}

Array.prototype.heyTS = function(){
    console.log(`TS says hello`);
}

// heroPower.ts()
// myHeros.ts()
// myHeros.heyTS()
// heroPower.heyTS()

// Inheritance
// Prototypal inheritance
// Outdated Approach
const User = {
    name: "coffee",
    email: "coffee@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingAssistant = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingAssistant
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingAssistant, Teacher)

let anotherUsername = "Code with Cofee     "

String.prototype.trueLength = function(){
    console.log(`${this}`); 
    console.log(`True length is: ${this.trim().length}`);   
}

anotherUsername.trueLength()
"TS".trueLength()
"Butterscotch".trueLength()