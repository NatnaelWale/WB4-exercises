"use strict";


let familyName = ["Chris", "Brown", "Khalid", "Bieber"];

displayFamily(familyName)

function displayFamily(nameArrays) {
    for(let i = 0; i < nameArrays.length; i++){
        console.log(`${i} ${nameArrays[i]}`)
    };
};
