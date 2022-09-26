let someResource;
console.log(someResource); // -> undefined
console.log(typeof someResource); // -> undefined

someResource = null;
console.log(someResource); // -> null
console.log(typeof someResource); // -> object

//O tipo nulo é quase a mesma coisa que o indefinido, mas 
//não pertence aos tipos de dado primitivos, pertencendo ao conjunto
//dos tipo complexos [objeto].
//Nós o usaremos quando quisermos explicitar que não tem nada naquela variável