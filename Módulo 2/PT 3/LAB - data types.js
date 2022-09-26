/*
Using the same data as in the previous Lab, create the contact list as an array, 
each element of which will be an object describing a single user. 
So we should get a three-element array, and each object placed
in it will contain three pieces of information (name, phone, and email).

At the end of the list declared in this way, add a new contact using the appropriate array method. 
The new contact is: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

Display the first and last contact, again in the format: name / phone / email. 
Use the length property of the array to determine the index of the last element. 
Remember that the array elements are indexed starting at 0.
*/


let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, 
{
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, 
{
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

let new_contact = {
name: "Maisie Haley",
phone:"0913 531 3030",
email:"risus.Quisque@urna.ca"
};

contacts.push (new_contact);

console.log (contacts[0], "---> First Contact");
console.log (contacts[contacts.length - 1], "---> Last Contact");