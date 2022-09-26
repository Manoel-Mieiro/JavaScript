let isUserReady = confirm("Are you ready?");
console.log(isUserReady); //Esse trecho só está aqui pra mostrar no final se o if foi TRUE ou FALSE
if (isUserReady) {
    alert("User ready!");
}

//------------------------------------------------------------------------------------------------//
let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
console.log(total); // -> Uncaught ReferenceError: total is not defined
