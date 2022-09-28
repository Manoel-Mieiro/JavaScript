let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(key); // -> name, surname, age, email
};

/*
 O problema é que o console só exibe o nome dos itens do objeto user.
 Se quisermos imprimir o conteúdo do objeto, não poderemos fazer como de costume (notação de ponto).
 Para tal, envolvemos a categoria em um colchete.
 */

 //Assim, o loop acima ficaria:

 for (key in user){
    console.log (user.name); //undefined
    console.log ([name]);
    
 }

 