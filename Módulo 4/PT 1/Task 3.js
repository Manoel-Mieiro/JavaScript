let greeting = alert ("Calculadora");

let op1 = prompt ("Insira o operando 1:");
let op2 = prompt ("Insira outro operando:");

let operation = prompt ("Informe a operação!");

Number(op1);
Number (op2);

if ((Number.isNaN(op1)) || (Number.isNaN(op2))){
    op1 *= 1;
    op2 *= 2;
}


let asw = 1;

console.log(Number.isNaN (asw));

//----------------------------//Problema abaixo, resultado não é numero//-----------------------------------------//
/*
switch (operation){
    case "+":
        asw = op1 + op2;
        console.log(asw);
        alert (op1, " + ", op2, "= ", asw);
        break;
    case "-":
        asw = op1 - op2;
        alert (op1, " - ", op2, "= ", asw);
        break;
    case "*":
        asw = op1 * op2;
        alert (op1, "*", op2, "= ", asw);
        break;
    case "/":
        asw = op1 /op2;
        alert (op1, "/", op2, "= ", asw);
        break;
 
    default:
        alert ("Operação inválida! Utilize apenas os seguintes sinais: '+', '-', '*', '/'.");
}
       */