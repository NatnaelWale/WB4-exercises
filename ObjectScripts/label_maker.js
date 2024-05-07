"use strict";

let object = {
    name: "Whitney Houston",
    address: "1213 Bambock Street",
    city: "Stone Mountain",
    state: "Georgia",
    zip: "30083"
}

labelMaker(object);


function labelMaker(contact) {
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city + ', ' + contact.state + ' ' + contact.zip);
}

