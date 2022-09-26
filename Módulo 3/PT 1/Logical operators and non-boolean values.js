let nr = 0;
let year = 1970;
let name = "Alice";
let empty = "";

console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true

console.log(!!nr); // -> false
console.log(!!name); // -> true


/*
This is slightly different for binary logical operators (i.e. AND and OR). 
They don't return a Boolean value. In reality, they return its first or second operand. 
The AND operator will return the first operand if it evaluates to false, and the second operand otherwise. 
The OR operator will return its first operand if it evaluates to true, and the second operand otherwise. 
Evaluation is simply an attempt to convert an operand to a Boolean-type value 
(again, according to the rules learned in the previous chapter).
*/

console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string


console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob
