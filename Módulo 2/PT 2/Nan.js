let path = "C:\\Windows" - "Windows";
console.log(path); // -> NaN

let test = "100" - "10";
console.log(test); // -> 90
console.log(typeof test); // -> number

//A excessão do operador de adição -> concatenate
let pathing = "C:\\" + "Windows";
console.log(pathing); // -> C:\Windows (houve concatenamento)

let testing = "100" + "10";
console.log(testing); // -> 10010   (mais uma vez, houve concatenamento)
console.log(typeof testing); // -> string

//string interpolation -> PESQUISAR DEPOIS POIS NÃO FUNCIONOU NO INTERPRETADOR E NO BROWSER
let country = "Malawi";
let continent = "Africa";

let sentence = ' ${country} is located in ${continent}.';
console.log(sentence); // -> Malawi is located in Africa.
