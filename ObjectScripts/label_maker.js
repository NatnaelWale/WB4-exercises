"use strict";

let object = {
    name: "Whitney Houston",
    address: "1213 Bambock Street",
    city: "Stone Mountain",
    state: "Georgia",
    zip: "30083"
}

function labelMaker(object) {
    console.log(object.name);
    console.log(object.address);
    console.log(object.city + ', ' + object.state + ' ' + object.zip);
}

labelMaker(object);