"use strict";

let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

//   console.log(studentArray);
for (let i = 0; i < students.length; i++) {
  let studentsScores = students[i].scores;
  // console.log(studentsScores);
  function getAverage(score) {
    let total = 0;
    for (let j = 0; j < score.length; j++) {
      total += score[j];
    }
    let average = total / score.length;

    //   console.log(average)

    return average;
  }
  let avg = getAverage(studentsScores);
  console.log(students[i].name + " " + avg);
}


console.log("-----------------new way-------------")


for(let student of students){
  let total = 0;
  for(let score of student.scores){
    total += score;
  }
  let average = total/student.scores.length

  console.log(student.name + " " + average);
}
