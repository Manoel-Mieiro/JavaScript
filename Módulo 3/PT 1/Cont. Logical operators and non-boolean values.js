/*
Conversely, if the first operand of OR is true, it will be returned, and no other check will be made.
This quickens code execution, but has one side effect visible in this example:
*/
let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0

/*
The instruction y++ will never be executed, which may be confusing.
Logical operators are usually used together with conditional operators, 
and they are especially useful in conditional instructions (decision making)
and in loops (loop-ending conditions). You can learn about their practical application 
in the sections on conditional instructions and loops mentioned just now.
*/
