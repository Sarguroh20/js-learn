// for

// ⌨️ Ctrl + d - Duplicate or Replace
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element);                // Error: element is not defined (Block Scope Error)

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loops value: ${j} and inner loop ${i}`);
    }
}

// Multiplication Table from 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i + '*' + j + ' = ' + i*j);
    }    
}

let myArray = ["Butterscotch", "Pista", "Kesar", "Mango"]
// console.log(myArray.length);        // 4             

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// index <= myArray.length -> 0, 1, 2, 3, 4 <= 4 -> for last index instead of Array out of bound exception it would through undefined.
 
// Keyword - break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is : ${i}`);
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is : ${i}`);
}