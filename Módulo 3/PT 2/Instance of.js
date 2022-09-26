/*
instanceof
The instanceof operator appeared while discussing arrays. 

It is a binary operator that checks whether an object (left operand) is of some type (right operand). 

Depending on the test result, it returns true or false.

During this course, the usefulness of this operator is limited to testing whether a variable contains an array.
*/
let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false
