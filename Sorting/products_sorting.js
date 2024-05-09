"use strict";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Ethiopian Scent", price: 9.79},
    {product: "Sweet Aroma", price: 3.89},
    {product: "Candy Lovers", price: 1.89},
    {product: "Habesha", price: 5.49},
    {product: "Hot Spice", price: 2.69},
    {product: "Plain sweet", price: 0.69},
   ];

   function caseInsenstiveCompare(a,b) {
    let aUpper = a.toUpperCase();
    let bUpper = b.toUpperCase();
    if( aUpper < bUpper){return -1;}
    else if (aUpper == bUpper){return 0;}
    else {return 1;}
}
function priceDescendingCompare(a,b) {
    if( a > b){return -1;}
    else if (a == b){return 0;}
    else {return 1;}
}
  


let productsName = [];
let arrayLength = products.length;
for(let i=0; i<arrayLength; i++) {
let productName = products[i].product;
productsName.push(productName);
}
productsName.sort(caseInsenstiveCompare);
console.log(productsName);


console.log("------------------------------");

let productPrice = [];

for(let i=0; i<arrayLength; i++){
    let productArrayPrice = products[i].price;
    productPrice.push(productArrayPrice);
}
productPrice.sort(priceDescendingCompare);
console.log(productPrice);
