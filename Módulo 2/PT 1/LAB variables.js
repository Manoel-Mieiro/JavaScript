"use strict"        //Impede a cagada de mais de uma declaraçãp
//--------------------------------------Elementos do vetor-------------------------------------------------//
let name = ["Maxwell Wright ", "Raja Villarreal ", "Helen Richards"];
let phone = ["(0191) 719 6495 ", "0866 398 2895 ", "0800 1111"];
let email = ["Curabitur.egestas.nunc@nonummyac.co.uk ", "posuere.vulputate@sed.com ", "libero@convallis.edu"];
let i = 0;
console.log("Name          ", "Phone           ", "Email           ");
for (i = 0; i < 3; i++) {       //Loop for
    console.log(name[i], phone[i], email[i]);
}