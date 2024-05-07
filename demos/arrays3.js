"use strict";


let myOrder = [ 
    {item: "Chicken Tacos", price: 8.95},
    {item: "Guacamole", price: 2.85},
    {item: "Sweet Tea", price: 2.75}
   ];
let yourOrder = [ 
    {item: "Hamburger", price: 6.95},
    {item: "Fries", price: 2.25},
    {item: "Sweet Tea", price: 2.75},
    {item: "Fried Apple Pie", price: 4.95}
   ];
   

   function getOrderPrice(order) {
    let orderTotal = 0;
    for(let i = 0; i < order.length; i++) {
        orderTotal += order[i].price;
    }
    return orderTotal.toFixed(2);
   }

   console.log(getOrderPrice(myOrder))