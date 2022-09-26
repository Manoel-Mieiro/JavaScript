/*
The equality operator requires that they are only equal, and their types are not compared. 
So if the operands are of different types, the interpreter will try to convert them to numbers, 
for example, false will convert to 0, true to 1, undefined to NaN, null to 0, 10n to 10 and "123" to 123, etc.

Note that if any of the operands has a NaN value (or has been converted to NaN, e.g. with undefined), 
the equality operator will return false.
*/
console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false

