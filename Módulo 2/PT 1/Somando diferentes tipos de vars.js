let greeting = "Hello!";
let counter = 100;
console.log(greeting); // -> Hello!
greeting = 1;
console.log(greeting); // -> 1
//Conforme execução, notamos que o JS não liga pro tipo
//de declração da variável, pois "greeting", que inicialmente
//aparentava ser uma string também é um inteiro graças a nossa
//última declaração
greeting = "Hello!";
greeting = greeting + counter; // -> string + int
console.log(greeting); // -> Hello!100
