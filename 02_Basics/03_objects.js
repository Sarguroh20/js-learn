// 2 ways to declare an Object -: 1) Literals 2) Constructor
// 📝 Interview Q. Declaring through Constructor - Singleton ✅ else declaring through literals - No Singleton ❌

// Object.create -> Constructor Method

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "TS",
    "full name": "TS ST",
    [mySym]: "mykey1",
    age: 19,
    location: "Amsterdam",
    email: "TS@myComp.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Friday"]
}

// console.log(JsUser.location);
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);            // full name can be accessed only through square notation.
// console.log(JsUser[mySym]);                  // mykey1

// 📝 Interview Q. Define a Symbol, add in object keys & print it.

JsUser.email = "TS@newComp.com"
// Object.freeze(JsUser)
// JsUser.email = "TS@anotherComp.com"
// console.log(JsUser);
/* Output: 
{
  name: 'TS',
  'full name': 'TS ST',
  age: 19,
  location: 'Amsterdam',
  email: 'TS@newComp.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Tuesday', 'Friday' ],
  [Symbol(key1)]: 'mykey1'
} */

JsUser.greeting = function(){
    console.log("Hello Js User!");
}
// console.log(JsUser.greeting);                // [Function (anonymous)]            
JsUser.greeting();

JsUser.greetingTwo = function(){
    console.log(`Hello new Js user ${this.name}`);
}
JsUser.greetingTwo();