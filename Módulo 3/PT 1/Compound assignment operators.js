let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false
/*
The instruction a &&= false means exactly the same as a = a && false.

We can prepare a similar example for OR operations:
*/

let b = false;
console.log(b); // -> false
b ||= true;
console.log(b); // -> true

//This time, the operation b ||= true is interpreted as b = b || true.
