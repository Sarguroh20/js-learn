function  SetUsername(username){
    // Complex DB Calls
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password){
    // SetUsername(username)
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai =  new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// call passess current execution context to other function