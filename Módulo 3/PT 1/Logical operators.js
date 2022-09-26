const a = false;
const b = true;
const c = false;
const d = true;

console.log(a && b && c || d); // -> true
// ele enxerga ([false && true && false] || true) -> como um é true, o resultado também é.
console.log(a && b && (c || d)); // -> false

//Os operadores lógicos tem a mesma representação do C: ! = NOT; && = AND; || = OR