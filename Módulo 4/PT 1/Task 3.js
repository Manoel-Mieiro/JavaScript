let greeting = alert ("Calculadora");

let op1 = prompt ("Insira o operando 1:");
let op2 = prompt ("Insira outro operando:");

let operation = prompt ("Informe a operação!");
    
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

// Gabarito:

let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let operand = prompt("Enter operand (+, -, * or /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: unknown operand";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);