for (let i = 0; i < 10; i++) {
    console.log(i);
}

//Now let's try to rewrite the same example using the while loop:

/* 
let i = 0;
while (i < 10) {
    console.log(i);
i++;
}
*/

//Outro exemplo:

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < 4; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

//Reescrevendo o exxemplo acima limitando i ao valor do comprimento do array
/*
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190
*/