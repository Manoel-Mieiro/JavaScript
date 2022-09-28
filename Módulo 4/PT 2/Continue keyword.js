/*
Just like break, continue can be used in loops (but not in the switch statement). 
When used, it applies to the closest surrounding loop. 
The continue statement, in contrast to break, does not end the whole loop, but rather starts the next iteration of this loop. 
We can think of it as jumping right to the end of the current iteration.
 */



for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
/*
The program writes numbers from 0 to 9 to the console, but skips the number 3. 
This happens because when i equals 3, the continue statement is executed, ending this iteration (and skipping the console.log statement)
and starting another one.
 */

/*
Both break and continue are not used particularly often. 
We should definitely not use them when we can terminate the loop with a properly constructed condition.
They are useful in emergency situations, when something unusual happens in loops with more complex iterations.
 */