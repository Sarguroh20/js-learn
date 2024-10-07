// Object Literal
const user = {
    username: "TS",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        console.log('Got user details from hidden database');
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user["username"]);
// console.log(user.getUserDetails());
// console.log(this);                              // {}

// Constructor Function -> 'new' keyword 
// Constructor Function provides new instances everytime
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// const userOne = User("ST", 13, true)
// const userTwo = User("Coff", 11, false)
// console.log(userOne);                            // Override: userTwo

const userOne = new User("ST", 13, true)
const userTwo = new User("Coff", 11, false)
console.log(userOne.constructor);    
// console.log(userOne);
// console.log(userTwo); 
console.log(userOne instanceof User);
                 

// when use of 'new' keyword - 
// 1. An empty object is created called as instance.
// 2. Constructor Function is called because of new keyword & packs all the arguments and then provide it to you
// 3. Arguments get injected in this keyword
// 4. Got in the function