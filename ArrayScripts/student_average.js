"use strict";

let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

function studentAverages(studentArray) {
//   console.log(studentArray);
  for (let i = 0; i < studentArray.length; i++) {
    let studentsScores = studentArray[i].scores;
    // console.log(studentsScores);
    function getAverage(score) {
      let total = 0;
      for (let i = 0; i < score.length; i++) {
        total += score[i];
      }
      let average = total / score.length;

    //   console.log(average)

      return average;
    }
    let avg  =  getAverage(studentsScores);
    console.log(studentArray[i].name + " " + avg);
    
}

}

studentAverages(students);
