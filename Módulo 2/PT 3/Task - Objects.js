//Create an object that describes a train ticket and stores it in the ticket variable. The object must have three fields:

//*starting station (key name from, and as a value, give the name of the nearest station in your area)
//*end station (key name to, and as a value, give any other station within 100 km)
//*the price of the ticket (key name price, and as a value, give the amount you would like to pay for this ticket)
//*The object must be created using curly brackets, in which all fields will be listed immediately. Then display the values of all the
//fields of the ticket on the console.

//*Declare an empty object and save it to a person variable. Using dot notation, add 
//firstName and lastName fields to the object by entering your data as values. It will try to display the individual fields on the console.

let ticket = {
    start_st: "Inhaúma",
    end_st: "Glória",
    price: 6.50,
};

console.log ("Partida: ", ticket.start_st);
console.log ("Destino: ", ticket.end_st);
console.log ("Bilhete: R$", ticket.price);

let ept = {};
ept.fist_name = "Manoel";
ept.last_name = "Mieiro";

console.log (ept);
