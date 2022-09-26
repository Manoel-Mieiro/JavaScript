//Let's test the typeof operator using a simple example:
let year = 1990;
console.log(typeof year); // -> number
console.log(typeof 1991); // -> number

let name = "Alice";
console.log(typeof name); // -> string
console.log(typeof "Bob"); // -> string

let typeOfYear = typeof year;
console.log(typeOfYear); // -> number
console.log(typeof typeOfYear); // -> string

//Again we declare and initiate the variable year. As you can see, 
//typeof for both the literal 1991 and the variable containing a 
//number (we initialize it with the literal 1990) will return the 
//word "number". We perform a similar test on the "Alice" and "Bob" 
//strings, using the variable name. Additionally, we do a small 
//experiment. The result of typeof year is stored to the variable 
//named typeOfYear. As you can see, it stores the value as a “number”. 
//If we check the type of this variable, we get “string”. Check the example yourself in the editor.