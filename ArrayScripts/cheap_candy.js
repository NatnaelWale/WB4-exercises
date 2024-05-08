"Use strict";


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
 
   
   let lessthanFourBucksCandles = [];
 
   let numItems = products.length;

   for (let i = 0; i < numItems; i++) {
    if (products[i].price < 4.00) {
        lessthanFourBucksCandles.push(products[i].product)
    }
   };
// console.log(`The candles that cost less than four bucks are: ${lessthanFourBucksCandles}.`);

let productsWithMandM = []

for (let i = 0; i < numItems; i++) {
    if (products[i].product == "M&M") {
        productsWithMandM.push(products[i].product)
    }
};
if(productsWithMandM == "") {
    console.log(`There is no candy that has "M&M" its name.`)
} else {
    console.log(`The candles that has M&Ms in their name are: ${productsWithMandM}.`);
}

let checkIfWeHaveCandy = [];

for (let i = 0; i < numItems; i++) {
    if (products[i].product == "Swedish Fish") {
        checkIfWeHaveCandy.push(products[i].price)
    }
};
if(productsWithMandM == " ") {
    console.log(`I am sorry but we don't carry "Swedish Fish" Candy. please check next time.`)
} else {
    console.log(`Yes we do carry "Swedish Fish" Candy with it's price being $${checkIfWeHaveCandy}.`);
}