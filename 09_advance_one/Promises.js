// Promise Consume & Promise Create
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async Task is completed');
        resolve()
    }, 1000)
})

// Resolve connection is with .then()
promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2 completed');
        resolve()
    }, 1000);
}).then(function(){
    console.log('Async Task 2 resolved');  
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "coffee", email: "coffee@example.com"});
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user); 
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function (){
        let error = true
        if(!error){
            resolve({username: "TS", password: "123456"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);  
}).catch((error)=>{
    console.log(error); 
}).finally(()=>console.log('The promise is either resolved or rejected'))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript", password: "123456"})
        } else {
            reject('ERROR: Js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);  
    } catch (error) {
        console.log(error);
    } 
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/Sarguroh20')
.then((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data); 
})
.catch((error) => console.log(error))

// promise.all