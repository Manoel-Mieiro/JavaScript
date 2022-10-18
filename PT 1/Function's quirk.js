/*Usually, functions are declared before they are called, mostly at the beginning of the code. 
However, this is only a good practice, which increases the readability of the code, not a JavaScript syntax requirement.
Function declarations are automatically moved to the top of the scope, so we can use them before the declaration, as long as they are in the scope.

So the code:
*/
let name = Alice

function showName() {
    console.log(name);
}

showName(); // -> Alice

//will work exactly the same as:

//let name = Alice (comentei esse trecho porque name já foi declarado no exemlo 1)

showName(); // -> Alice


function showName() {
    console.log(name);
}

/*So we already know what a declaration and a function call are.
It is time to take a closer look at its contents. Let's start with the variables we use in it.*/

