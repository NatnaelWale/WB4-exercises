"use strict";

function compareAscendingNumber(a,b) {
   if(a<b){
    return -1;
   }
   else if (a == b) {
    return 0;
 }
  else {
    return 1;
  } 
}

function caseInsenstiveCompare(a,b) {
    let aUpper = a.toUpperCase();
    let bUpper = b.toUpperCase();

    if( aUpper < bUpper){return -1;}
    else if (aUpper == bUpper){return 0;}
    else {return 1;}
}

let students = ["Natalie", "Brittany", "Zcahry", "Monse", "Zana", "Ian", "Julian"];
let numbers = [3,27,400,1,111,5]

console.log("BEFORE");
console.log(students);

students.sort();

console.log("AFTER");
console.log(students);

console.log()
console.log("BEFORE");
console.log(numbers);

numbers.sort(compareAscendingNumber);

console.log()
console.log("AFTER");
console.log(numbers);


students.sort(caseInsenstiveCompare);

console.log()
console.log("AFTER");
console.log(students);