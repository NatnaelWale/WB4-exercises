"use strict";


let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ]

function calculateTotal(itemsArray) {
    let subTotal = 0;
    for(let i = 0; i < itemsArray.length; i++) {
        subTotal += itemsArray[i].price;
    }

    let tax = 0.08 * subTotal;

    let tip = 0.18 * subTotal;

    let totalDue = subTotal + tax + tip;

    console.log(`\n Subtotal: $${subTotal.toFixed(2)} \n Tax: $${tax.toFixed(2)} \n Tip: $${tip.toFixed(2)} \n Total Due: $${totalDue.toFixed(2)}`)
}

calculateTotal(lunch);