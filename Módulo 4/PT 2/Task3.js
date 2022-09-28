/*Task 3
There are ten different numbers in this numbers array.
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

Write a program that first writes out all these numbers on the console, then only those that are even
(hint: the remainder of dividing an even number by 2 is equal to 0), then only those that are larger than 10 and at the same time smaller than 60.
*/

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

let attempt = prompt ("Digite o nº correspondente a operação que deseja desempenhar:\n 1 - Imprimir o vetor numbers;\n 2 - Imprimir os números pares do vetor;\n 3 - Imprimir números maiores que 10 e menors que 60 do vetor numbers");

attempt *=1;


for (let i=0; i<numbers.length; i++){
    switch (attempt){
    case 1:
        console.log(numbers[i]);
        break;
    case 2:
        if (numbers[i]%2 != 0){
        }
        else{
        console.log(numbers[i]);
        }
        break;
    case 3:
        if (numbers[i]<=10 || numbers[i]>=60){
        }
        else{
        console.log(numbers[i]);
        }
        break;
    default:
        console.log ("Operação inserida em desenvolvimento");
}    
}


