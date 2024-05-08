"use strict";


let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];
   
   let CourseStartDate = [];

   let numItems = courses.length;
   for (let i = 0; i < numItems; i++) {
    if (courses[i].CourseId == "PROG200") {
        CourseStartDate.push(courses[i].StartDate)
    }
};
console.log(`The course PROG200 start date is: ${CourseStartDate[0]}`);

   let titleOfCourse = [];

   for (let i = 0; i < numItems; i++) {
    if (courses[i].CourseId == "PROJ500") {
        titleOfCourse.push(courses[i].Title)
    }
};
console.log(`The course PROJ500 title is: ${titleOfCourse[0]}`);

   let listOfCourse = [];

   for (let i = 0; i < numItems; i++) {
    if (courses[i].Fee == "50.00") {
        listOfCourse.push(courses[i].Title)
    }
   };
console.log(`The courses title that cost less than or equal to $50 are: ${listOfCourse}`);

   let classRoom1 = [];
   for (let i = 0; i < numItems; i++) {
    if (courses[i].Location == "Classroom 1") {
        classRoom1.push(courses[i].Title)
    }
   };
console.log(`The courses that meet in classroom 1 are: ${classRoom1}`);
