/*The return statement
Functions that have been called execute a sequence of instructions contained in their body.
The result of this execution may be a certain value that we may want to store in some variable.
The return keyword comes to help us in this case. What exactly is return for?

First, it causes the function to end exactly where this word occurs, even if there are further instructions.
Second, it allows us to return a given value from inside the function to the place where it was called.
Let's move away for a moment from our example with mean temperature calculation and play with a slightly simpler code.
The showMsg function contains only two console.logs separated by return.*/

function showMsg() {
    console.log("message 1");
    return;
    console.log("message 2");
}

showMsg(); // -> message 1

/*As expected, the call ends up displaying only the first message "message 1", then the return interrupts the function.
In practice, using return here would not make much sense.
It causes the console.log("message 2") to never be called.
So it would be easier not to write a second console.log call at all.

However, using the conditional instructions, we can, for example, react to errors inside the function, 
and in certain situations interrupt the function immediately.*/

//Continued
let temperatures;
let meanTemp;

function getMeanTemp() {
    let sum = 0;
    let result;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    result = sum / temperatures.length;
    return result;  //aplicação do return
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
meanTemp = getMeanTemp();
console.log("mean:", {meanTemp});

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
meanTemp = getMeanTemp();
console.log("mean:", {meanTemp});
 
/* 
The result variable is actually only used to temporarily store the value to be returned.
So we can simplify the function code even more. We will skip the result variable by placing the appropriate operation directly after return. 
*/

//function getMeanTemp() {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length; //omitindo result para economizar variáveis e otimizar o código
//}
//let temperatures;

//function getMeanTemp() {
  //  let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
//}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log("mean:", getMeanTemp());

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log("mean:", getMeanTemp());

//Omitiu-se a varivável meanTemp, a qual ficava resonsável por printar o retorno da função, afinal eu posso telo apenas chamando console.log da função