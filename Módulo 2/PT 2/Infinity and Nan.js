let x = 2;
let a = 1 /-(2 - x) ;
let b = Infinity;

console.log(a); // -> -Infinity
console.log(b); // -> Infinity
console.log(typeof a); // -> number
console.log(typeof b); // -> number

let s = "it's definitely not a number";
let n = s * 10;
console.log(n); // -> NaN
console.log(typeof n); // -> number
