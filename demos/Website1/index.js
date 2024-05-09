"use strict";



let usStatesAndTerritories = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", 
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", 
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
    "West Virginia", "Wisconsin", "Wyoming", 
    "American Samoa", "Guam", "Northern Mariana Islands", "Puerto Rico", "U.S. Virgin Islands", 
    "District of Columbia"
];

let usStatesAndTerritoriesAbbreviations = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", 
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "AS", "GU", "MP", "PR", "VI", "DC"
];



const stateList = document.getElementById("stateOptions");
const outputH1= document.getElementById("outputH1")

const doSomethingButton = document.getElementById("btn");

window.onload = () => {
    populateStatesList();
    doSomethingButton.onclick = onDoSomethingButtonClick;
    stateList.onchange = onDoSomethingButtonClick;
}

function onDoSomethingButtonClick() {
   let selectedValue = stateList.value;
//    console.log(selectedValue);

   if(selectedValue != ""){
    outputH1.innerHTML = selectedValue;
   } else {
    outputH1.innerHTML = "No Region is selected"
   }
}

function populateStatesList() {
    console.log("populate")
    for(let i=0;i < usStatesAndTerritories.length; i++) {
        let newOption = document.createElement("Option");
        newOption.textContent = usStatesAndTerritories[i];
        newOption.value = usStatesAndTerritoriesAbbreviations[i];
        stateList.appendChild(newOption);
    }
}