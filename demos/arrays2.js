"use strict";



let kids = ["Natalie", "Brittany", "Zachary", "David", "Jane", "Jhon"];

// let i = 0;
// let totalKids = kids.length

// while (i < totalKids) {
//     console.log(`${i} ${kids[i]}`);
//     i++;
// }


// for (i = 0; i < totalKids; i++) {
//     console.log(`${i} ${kids[i]}`);
// }

function displayKids(kidArray) {
    let totalKids = kidArray.length;

    for(let i = 0; i < totalKids; i++) {
        console.log(`${i} ${kids[i]}`)
    }
}

displayKids(kids);