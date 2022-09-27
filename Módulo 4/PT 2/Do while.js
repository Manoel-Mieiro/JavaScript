
/*
let isOver = false;
let counter = 1;

while (!isOver) {
    isOver = !confirm('[${counter++}] Continue the loop?');

*/
//Reescrevendo o código while acima, temos:


let isOver;
let counter = 1;

do {
    isOver = !confirm('[${counter++}] Continue the loop?');
} while (!isOver);




//In the next example, we demonstrate what we said earlier – a do ... while loop always iterates at least once:

let condition = false;

while (condition) {
    console.log("A while loop iteration."); // never executed
}

do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);
