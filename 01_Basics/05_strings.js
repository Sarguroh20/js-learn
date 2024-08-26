const name = "myname"
const repoCount = 28

// console.log(name + repoCount + " Value");

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Big-Farm')

// console.log(gameName[0]);                // B
console.log(gameName.__proto__);

console.log(gameName.length);
// console.log(gameName.toUpperCase());     // BIG-FARM   
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(2, -1)
console.log(anotherString);

const newString1 = "   myname     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://seo.com/seo%20madebyme"
console.log(url.replace('%20', '-'));

console.log(url.includes('seo'));

console.log(gameName.split('-'));