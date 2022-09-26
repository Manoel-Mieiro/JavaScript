let names= ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

let name = names.pop(); //Não adianta botar nada aqui dentro, sempre será o último a ser perdido
console.log(names.length); // -> 3 //Perde-se 1 de comprimento
console.log(name); // -> Samuel -> Foi salvo de names.pop
console.log(names); // -> ["Olivia", "Emma", "Mateo"]
