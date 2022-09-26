/*
IF statement sample:

let price = 100;
let shippingCost;
if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}
console.log('price = ${price}, shipping = ${shippingCost}'); // -> price = 100, shipping = 0
*/

let price = 100;
let shippingCost = price > 50 ? 0 : 5;

console.log("price = ", price, " shipping = ", shippingCost); // -> price = 100, shipping = 0



//O mesmo código poderia ser escrito assim:

let start = confirm("Start?");
let message = start ? "Here we go!" : "Aborted";
alert(message);

