

//The fall-through can be useful when more than one case should end with exactly the same behavior, as you can see below:


//Basicamente, o fall-through é uma boa tática quando temnos mais de um resultado esperado para a mesma condição

let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
        alert("Gate A: empty");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}

//The code visible in the example will behave the same when "a", "A", 1 or "1" is given as the answer to the prompt.