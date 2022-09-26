let a = 10; // decimal - default 
//Todos os valores do sufixo são inputs para que um output decimal seja exibido
let b = 0x10; // hexadecimal (o sufixo [pós 0] define a conversão como hexa)
let c = 0o10; // octal (o sufixo [pós 0] define a conversão como octa)
let d = 0b10; // binary (o sufixo [pós 0] define a conversão como bin)
 
console.log(a); // -> 10 
console.log(b); // -> 16 
console.log(c); // -> 8 
console.log(d); // -> 2 

let x = 9e3;    //9*10^3
let y = 123e-5; //123*10^-5
console.log(x); // -> 9000 
console.log(y); // -> 0.00123
