/*
Task 6

Modify the calculator program that you made in Module 4 Section 2 in such a way that it will work in the loop until the user inputs Q
in any of the prompt boxes.

*/
let continua = true;
while (continua == true) {
let greeting = alert ("Calculadora");
let op1 = prompt ("Insira o operando 1:");
let op2 = prompt ("Insira outro operando:");

let operation = prompt ("Informe a operação!");

if ((op1 === "Q") || (op1 === "q") || (op2 === "Q") || (op2 ==="q") || (operation === "Q") || (operation === "q")){
    alert ("Input indevido!\nPrograma encerrado.");    
    break;
}
    op1 *= 1;
    op2 *= 1;

let asw;
switch (operation){
    case "+":
        asw = op1 + op2;
        alert ("Eis o resultado:");
        alert (asw);
        break;
    case "-":
        asw = op1 - op2;
        alert ("Eis o resultado:");
        alert (asw);
        break;
    case "*":
        alert ("Eis o resultado:");
        asw = op1 * op2;
        alert (asw);
        break;
    case "/":
        alert ("Eis o resultado:");
        asw = op1 /op2;
        alert (asw);
        break;
 
    default:
        alert ("Operação inválida! Utilize apenas os seguintes sinais: '+', '-', '*', '/'.");
}
continua = confirm ("Deseja continuar? ");
}