/*
Shadowing
As we mentioned earlier, the parameters are treated inside the function as local variables.
And just like the local variables explicitly declared inside a function, they shadow the global variables of the same name
(or more generally, variables from the outer scope).
Let's go back for a moment to the example with adding numbers.
The add function has two parameters: first and second.
At the same time, we will declare, out of the function, global variables named first, second, third, and fourth.


If inside the function, we refer to the variable:

first, it will be treated as the parameter with such a name that shadows the first global variable 
(i.e. we will operate on the value passed as the first argument)
second, it will also be treated as the function parameter (the value passed as the second argument)
third, it will be treated as a global variable, because inside the function there is neither a local variable nor a parameter
with that name that would shadow it;
fourth, it will be treated as global, the same as third.
Of course, outside the function, each of these names will refer to global variables.
*/

function add(first, second) {
return first + second;
}

let first = 10, second = 20, third = 40, fourth = 80;
console.log(add(first, second)); // -> 30
console.log(add(second, third)); // -> 60
console.log(add(third, fourth)); // -> 120

/*
Analyze the example carefully, writing down the specific values that are passed on to the add function in each of the four calls.

Also try to run and analyze one more simple example, in which you can shadow variables with both parameters and local variables.
*/

let a = 100, b = 200, c = 300;

function test(a) {
    let b = 10;
    console.log(a); // parameter a
    console.log(b); // local variable b
    console.log(c); // global variable c
}

test(1);        // -> 1
                // -> 10
                // -> 300

console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300
