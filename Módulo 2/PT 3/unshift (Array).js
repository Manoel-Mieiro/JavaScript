//Aqui temos um método semelhante ao push, com a diferença de que os novos itens serão adicionados ao início (index = 0)
let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.indexOf("Mateo")); // -> 2
console.log(names.indexOf("Victor")); // -> -1
names.unshift ("João", "Victoria");
console.log (names.indexOf ("João")); //-> 0
console.log (names.indexOf ("Victoria")); //-> 1
console.log (names.indexOf ("Olivia"));  //-> 2