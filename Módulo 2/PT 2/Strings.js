"use strict"
let country = "Brasil"; 
let capital = 'Brasília'; //Note que é possível denotar strings com dupla aspas ou não

console.log(country); // -> Brasil
console.log(typeof country); // -> string
console.log(capital); // -> Brasilia
console.log(typeof capital); // -> string

//Usando aspas dentro de uma string
let message1 = "The vessel 'Mars' called at the port."; //Como a string começou em aspas duplas, só foi possível usar aspas comuns
let message2 = 'Cyclone "Cilida" to pass close to Mauritius.';  //Já aqui, como começou em aspas comuns, foi possível usar as duplas

console.log(message1); // -> The vessel 'Mars' called at the port.
console.log(message2); // -> Cyclone "Cilida" to pass close to Mauritius.

//Usando aspas na string com a contrabarra
let mensagem1 = 'The vessel \'Mars\' called at the port.';   
let mensagem2 = "Cyclone \"Cilida\" to pass close to Mauritius.";

console.log(mensagem1); // -> The vessel 'Mars' called at the port.
console.log(mensagem2); // -> Cyclone "Cilida" to pass close to Mauritius.

let path = "C:\\Windows";
console.log(path); // -> C:\Windows
