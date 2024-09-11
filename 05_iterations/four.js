// for in loop

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key);                            // Return all keys
}

for (const key in myObject) {
    // console.log(myObject[key]);                  // Return all values
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    // console.log(key);                            // 0 1 2 3 4            [Each in new line]
    // console.log(programming[key]);               // js rb py java cpp    [Each in new line]
}

// Map is not iterable
// const map = new Map()
// map.set('KSA', 'Kingdom of Saudi Arabia')
// map.set('IN', 'India')
// map.set('US', 'United States')

// for (const key in map) {
//     console.log(key);   
// }
