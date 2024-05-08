"use strict";


let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

   let academyMemberWithId = [];

   let numOfActors = academyMembers.length;

   for(let i=0; i<numOfActors; i++) {
    if(academyMembers[i].memID == 187) {
        academyMemberWithId.push(academyMembers[i].name)
    }
   }
//    console.log(`The Academy Member with ID number 187 is: ${academyMemberWithId}`)


   let whoDidAtleastThreeFilms = [];

   for(let i=0; i<numOfActors; i++) {
    let films = academyMembers[i].films
    // console.log(films)
    let numberOfFilms = films.length;
    if(numberOfFilms >= 3) {
      whoDidAtleastThreeFilms.push(academyMembers[i].name) 
    }
   }
//    console.log(`The names of actors who have been involved in atleast three movies are: ${whoDidAtleastThreeFilms}`)

   let whoHasNameThatStartsWithBob = [];

   for(let i =0; i<numOfActors; i++) {
    let actorName = academyMembers[i].name;
    let actorNameIndex = actorName.indexOf(" ")
    let checkActorName = actorName.substring(0, actorNameIndex)
    // console.log(checkActorName);
    if(checkActorName == "Bob"){
        whoHasNameThatStartsWithBob.push(academyMembers[i].name)
    }
   }

//    console.log(`The actor name that starts with Bob is: ${whoHasNameThatStartsWithBob}`)


for (let i = 0; i < numOfActors; i++) {
    let member = academyMembers[i];
    // Check each film in the member's films array
    for (let j = 0; j < member.films.length; j++) {
        let film = member.films[j];
        // If a film starts with 'A', log the member's name and the film
        if (film.startsWith("A")) {
            console.log(`Member Name: ${member.name}, Film: ${film}`);
        }
    }
}


