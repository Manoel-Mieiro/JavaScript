//Funções contrutoras [servem para conversões de tipos de dado]
const str = String();   //Carrega uma string
const num = Number();   //Carrega um número [starta em 0 mas pode ser definido]
const bool = Boolean(); //Starta em 0 [Booleano falso]

console.log(str); // -> " " | Como nada foi escrito nada será exibido
console.log(num); // -> 0
console.log(bool); // -> false

const big1 = BigInt(42);    //Ao usar a função BigInt, um valor inicial deve obrigatóriamente ser atribuído
console.log(big1); // -> 42n

const big2 = BigInt();   // -> Uncaught TypeError: Cannot convert undefined to a BigInt #Aqui o valor não foi atribuido

//Exemplificando as conversões

const numero = 42;

const strFromNum1 = String(numero); //Transforma a variável numero em string
const strFromNum2 = String(8);      //O número 8 [argumento] vira string
const strFromBool = String(true);   //Imprime "True" [argumento]
const numFromStr = Number("312");   //Imprime o número presente na string
const boolFromNumber = Boolean(0);   //Imprime o argumento em boole

