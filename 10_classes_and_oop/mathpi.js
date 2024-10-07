const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

/* Output:
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
} */

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// console.log(Math.ceil(Math.PI));

const coffee = {
    name: "coffee",
    price: 450,
    isAvailable: true,

    orderCoffee: function(){
        console.log('Coffee out of stock');
    }
}

console.log(coffee);
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, 'name', {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (let [key, value] of Object.entries(coffee)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);   
    }
}