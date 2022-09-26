let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
//Abaixo, retornará -1 pois é o valor default para quando não achamos o elemento no array
console.log(names.indexOf("Victor")); // -> -1


names [4] = "Jonathas";
names [5] = "Olivia";
names [6] = "Bia";

console.log(names.indexOf("Olivia")); // -> 0, pois apesar de termos duas Olivias, por default, somente a primeira será retornada