let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri

days[0] = "Sunday";
console.log(days[0]); // -> Sunday

let emptyArray = [];
console.log(emptyArray[0]); // -> undefined

//Atribuindo valores à um array vazio
let animals = [];
console.log(animals[0]); // -> undefined

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]); // -> dog
console.log(animals[1]); // -> undefined
console.log(animals[2]); // -> cat
//Nota-se que não há necessidade de preencher todos os campos do array, como é mostrado acima no index = 1;


//Abaixo, vemo um peculiariade do JS, a qual permite atribuir valores de diferentes tipos à um mesmo array
let values = ["Test", 7, 12.3, false];

//Além disso, como é mostrado abaixo, é possível aninhar um array dentro do outro e acessar seus conteúdos normalmente...
//...e o pior, os arrays internos não precisam ter o mesmo tamanho
let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia

