/*
ternary
The last of the operators discussed is quite unusual, because it is the only operator using three operands. 
It is a conditional operator. Based on the value of the first operand (true or false),
the value of the second or third operand, respectively, is returned. 
This operator is most often used to place one of the two values in the variable depending on a certain condition. 
We will come back to the operator when discussing the conditional if, but here we’ll provide only a simple example of its use. 
The three operands are separated from each other by ? (the first from the second) and : (the second from the third).
*/

console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob

/*
Each of these operands can be an expression that must be calculated.
In the following example, the first operand is a comparison of two numbers using a comparison operator. 
The result of the comparison will be false, which will be used by the conditional (ternary) operator.
Here we come to an important problem about operator precedence and order of execution. In a moment, we will say a few more words about it.
*/

let name = 1 > 2 ? "Alice" : "Bob";
console.log(name); // -> Bob

