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
    let studentScoresLength = studentsScores.length;
    // console.log(studentsScores);
    function getAverage(score) {
      let total = 0;
      for (let j = 0; j < studentScoresLength; j++) {
        total += score[j];
      }
      let average = total / score.length;
      return average;
    }
    function getMedian(score) {
      // let's check is our number of scores are even or odd
      let studentScoresMiddleIndex = studentScoresLength / 2;
      if(studentScoresLength % 2 == 0) {
        let medianStudentScoreStart =
          studentsScores[studentScoresMiddleIndex - 1];
        //   console.log(medianStudentScoreStart);
        let medianStudentScoreEnd =
          studentsScores[studentScoresMiddleIndex];
        //   console.log(medianStudentScoreEnd)
        let median = (medianStudentScoreStart + medianStudentScoreEnd)/2;
        // console.log(median);
        return median;
      } else {
        let middleIndex = (studentScoresLength-1) / 2
        let median = studentsScores[middleIndex];
        // console.log(median);
        return median;
      }  
    }

    let avg = getAverage(studentsScores);
    let med = getMedian(studentsScores)
    console.log(studentArray[i].name + " Avg " + avg.toFixed(2) + " Med " + med);
  }
}

studentAverages(students);
