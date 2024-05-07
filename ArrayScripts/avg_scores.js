"use strict";


let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function getAverage(array) {
   let total = 0
   for (let i = 0; i < array.length; i++) {
    total += array[i]
   }
   let average = total / array.length;

   return average.toFixed(2);
}

console.log(getAverage(myScores));
console.log(getAverage(yourScores));