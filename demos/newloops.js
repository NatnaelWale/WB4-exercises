"use strict";


let kids = ["Natalie", "Brittany", "Zachary","David", "Jane", "Jhon", "Sally"];

for (let i=0; i <kids.length; i++){
    let kid = kids[i];

    console.log(kid);
    console.log(kid.toUpperCase());
    console.log(kid.toLocaleLowerCase());
}

console.log("----------------new way-----------")


for (let kid of kids) {
    console.log(kid);
    console.log(kid.toUpperCase());
    console.log(kid.toLocaleLowerCase());
}