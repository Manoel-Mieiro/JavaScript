let big3 = 1000n + 20; 
// -> Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
//Não se soma algo que não seja bigint ao numero bigint
let big4 = 1000n / 0n; // -> Uncaught RangeError: Division by zero
//Não há como forçar o Infinity ou o Nan por causa da propriedade 
//que impede o BigInt de se misturar com outros tipos de dados
let teste = ("Olá!");
let big5 = teste * 1n; //erro
console.log (-199n/3); //erro