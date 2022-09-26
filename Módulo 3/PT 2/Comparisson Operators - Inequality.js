console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true

console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true

console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <=  20); // -> true


/*
You can also use them to compare strings that do not represent numbers, but the algorithm of this comparison is quite complex,
and the comparison itself is not very useful. By way of simplification, single characters of both strings are tested on the same positions.
It is assumed that the values of the single characters correspond to their positions in the alphabet
(the letter b has a higher value than the letter a). 
Upper-case letters have lower values than lower-case letters, and digits have even lower values.
*/

console.log("b" > "a"); // -> true
console.log("a" > "B"); // -> true
console.log("B" > "A"); // -> true
console.log("A" > "4"); // -> true
console.log("4" > "1"); // -> true

console.log("ab1" < "ab4"); // -> true
console.log("ab4" < "abA"); // -> true
console.log("abB" < "aba"); // -> true
console.log("aba" < "abb"); // -> true

console.log("ab" < "ab4"); // -> true
