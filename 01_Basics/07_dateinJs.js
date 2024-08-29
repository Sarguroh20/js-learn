// Dates

let myDate = new Date()
// console.log(myDate);                         // 2024-08-29T18:19:48.660Z
// console.log(myDate.toString());              // Thu Aug 29 2024 18:19:48 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());          // Thu Aug 29 2024
// console.log(myDate.toISOString());           // 2024-08-29T18:22:42.924Z
// console.log(myDate.toJSON());                // 2024-08-29T18:22:42.924Z
// console.log(myDate.toLocaleDateString());    // 8/29/2024
// console.log(myDate.toLocaleString());        // 8/29/2024, 6:22:42 PM
// console.log(myDate.toLocaleTimeString());    // 6:22:42 PM
// console.log(typeof myDate);                  // object

// 📝 In JavaScript, the months are zero-indexed. This means that January is represented as 0, February as 1, and so on, up to December, which is represented as 11.
// let myCreatedDate = new Date(2024, 0, 24)
// console.log(myCreatedDate.toDateString());   // Wed Jan 24 2024

// let myCreatedDate = new Date(2024, 0, 24, 5, 3)
// console.log(myCreatedDate.toLocaleString()); // 1/24/2024, 5:03:00 AM

// let myCreatedDate = new Date("2024-08-30")   // YYYY-MM-DD Format
// console.log(myCreatedDate.toLocaleString()); // 8/30/2024, 12:00:00 AM

let myCreatedDate = new Date("08-30-2024")      // MM-DD-YYY Format
// console.log(myCreatedDate.toLocaleString()); //8/30/2024, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp);                    // 1724957354605
// console.log(myCreatedDate.getTime());        // 1724976000000

// Interview Q. While converting from millisecs to secs using / 1000 it gives decimal values so use Math.floor()
console.log(Math.floor(Date.now()/1000));       

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})