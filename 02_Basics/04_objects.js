// const myApp = new Object()       // Singleton object
const myApp = {}                    // Non-Singleton object

myApp.id = "123abc"
myApp.name = "user1"
myApp.isLoggedIn = false

// console.log(myApp);              // { id: '123abc', name: 'user1', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    full_name: {
        user_full_name: {
            first_name: "Some",
            last_name: "LostSoul"
        }
    }
}

// console.log(regularUser.full_name.user_full_name.first_name);

// Optional Chaining - if full_name doesn't exist (console.log(regularUser.full_name?.user_full_name.first_name);) ...

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);                // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// {} - Act as target, Rest as source
// console.log(obj4);               // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = {...obj1, ...obj2}
// console.log(obj4);               // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 2,
        email: "ts@gmail.com"
    },
    {
        id: 3,
        email: "st@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(myApp);

// console.log(Object.keys(myApp));        // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(myApp));      // [ '123abc', 'user1', false ]
console.log(Object.entries(myApp));        // [ [ 'id', '123abc' ], [ 'name', 'user1' ], [ 'isLoggedIn', false ] ]

// console.log(myApp.hasOwnProperty('isLoggedIn'));        // true
// console.log(myApp.hasOwnProperty('isLogged'));          // false

// 📌📌📌📌📌📌 Object De-structuring 📌📌📌📌📌📌
const course = {
    coursename: "Chai aur Js",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

// const {courseInstructor} = course        
// console.log(courseInstructor);           // Hitesh

const {courseInstructor: instructor} = course
console.log(instructor);

// API 
// Before XML, Now JSON
// {
//     "name": "myname",
//     "coursename": "Chai aur Js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

// randomuser me api -: https://randomuser.me/api/
// JSON Formatter -: https://jsonformatter.org/