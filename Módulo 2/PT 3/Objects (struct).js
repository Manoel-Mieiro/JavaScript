//Criando objetos com finalidade struct
let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};

console.log(user1.name); // -> Calvin
console.log(user2.name); // -> Mateus

//Modificando informações do objeto:
console.log(user1.age); // -> 66
user1.age = 67;
console.log(user1.age); // -> 67
//Abaixo, vemos a criação de um novo campo na estrutura
//Para tal, basta citar o objeto e, após o ponto, denotar o nome da nova estrutura e atribuir-lhe um valor
console.log(user2.phone); // -> undefined
user2.phone = "904-399-7557";
console.log(user2.phone); // -> 904-399-7557

//Abaixo, vemos que é possível deletar campos da estrutura 
console.log(user2.phone); // -> 904-399-7557
//Basta usar o delete
delete user2.phone;
console.log(user2.phone); // -> undefined
