//*Write a piece of code that will create variables and initialize them with values of Boolean, Number, BigInt, String and undefined types using (whenever possible) literals and constructor functions.
//*Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, for example, in the following form: 1000 [number].
//*Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?
//*Try adding two values of the same type and check the result type. Try it for all primitive types.
//*Try adding two values of different types and check the results.
//*Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1)


//Defining variables and setting their type:
const teste = 1234;
let boo = Boolean(teste);
let num = Number(teste);
let big = BigInt(teste);
let str = String(teste);
let und = undefined;

console.log(boo +  "[" + typeof boo + "]" + ",", num + "[" + typeof num + "]" + ",", big + "[" + typeof big + "]" + ",", str + "[" + typeof str + "]" + ",", und + "[" + typeof und + "]");

//Carrying out a chain of conversions a finding if it's possible or not:
let conversions = String (teste);
console.log ("Step 1 (string):   " + conversions);
conversions = Number(conversions);
console.log ("Step 2 (number from string):   " + conversions);
conversions =  BigInt (conversions);
console.log ("Step 3 (bigint from number):   " + conversions);
conversions = Boolean (conversions);
console.log ("Final one (boolean from bigint):   " + conversions + ". As you can see, the intial string \"1234\" became boolean with value true; 'cause of the intial value != 0 || null " );

//Adding values with the same type:
console.log(teste + 13);
console.log (teste + '13');
console.log (BigInt(teste) + 13n);
console.log (Boolean(teste + 13));

//Adding values with different types:
let Aux = Number(teste);
console.log("------------------------//-------------------------------");
console.log(Aux + true);    //R: 1235, pois o valor booleano de true é 1, então Aux (1234) + true (1) = 12345
console.log(Aux + '13');    //R: 123413, pois foi o sinal de + (no contexto de string) concatena termos, sejam eles números ou strings
console.log(Aux + undefined);   //R: NaN
//console.log (Aux + 13n); //R: VM700:45 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log("------------------------//-------------------------------");


//Trying to modify a const, so it results 43 instead of 421:
const str1 = 42 + "1";

console.log((str1/10) + 0.9); //Não foi a solução mais inteligente do mundo, mas eu trouxe a string de volta para a casa das dezenas e somei o complemento para o número ficar redondo.
