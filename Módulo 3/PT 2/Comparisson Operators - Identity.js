/*
To check if the operands are equal, we can use either the identity (strict equality) operator === or the equality operator ==.

The first is more restrictive, and in order to return true, the operands must be identical (i.e. they must be equal and of the same type).
*/
console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false

