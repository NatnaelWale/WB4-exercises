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
 
   
   let lessthanFourBucksCandy = [];
 
   let numItems = products.length;

   for (let i = 0; i < numItems; i++) {
    if (products[i].price < 4.00) {
        lessthanFourBucksCandy.push(products[i].product)
    }
   };
// console.log(`The candles that cost less than four bucks are: ${lessthanFourBucksCandy}.`);

let productsWithMandM = []

for (let i = 0; i < numItems; i++) {
    let productName = products[i].product;
    let indexOfMandMs = productName.indexOf("M&Ms");
    if (indexOfMandMs >= 0) {
        productsWithMandM.push(products[i].product)
    }
};
console.log(`The candles that has M&Ms in their name are: ${productsWithMandM}.`)


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