/*Task 2

Modify the previous program so that it asks the user for the first and last number it uses instead of 100 and 0 
(hint: use the prompt dialog). Check if the entered values are correct (that the initial value is greater than the final value).
*/

alert("Informe dois números, respeitando a ordem decrescente deles.");
let n1 = prompt("forneça o primeiro número: ");
let n2 = prompt ("forneça o segundo número: ");

n1 *= 1;
n2 *= 1;

if (n1 > n2){
    do{
        console.log (n2);
        n2 += 10;
    }while (n2<n1);
}
else{
alert ("Ordem incorreta, programa encerrado!");
}