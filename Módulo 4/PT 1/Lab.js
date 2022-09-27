/*
During the last modification of the program with the contact list, 
we allow the user to add a new contact with the data entered by the user while the program is executing. 
Let's go a step further – try to modify the program so that the user has a choice of what they want to do with the list. 

They will have a choice of:
showing the first contact (first)
showing the last contact (last)
adding a new contact (new)

When adding a new contact, check if the user has entered all the necessary data.
If at least one of the three values is missing (name, phone, or email) don't add the contact.
*/

let greeting = alert ("Salve, o que deseja fazer?\n 1 - Ler o primeiro contato\n 2 - Ler o último contato\n 3 - Adicionar um novo contato");
let op = prompt ("Digite o número correspondente a ação que deseja realizar.");

op *=1;

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

switch (op){
    case 1:
        let p1 = String (contacts[0].name) + ", ";
        p1 = p1 + String (contacts[0].phone) + ", ";
        p1 = p1 + String (contacts[0].email);
        alert (p1);
        break;
    case 2:
        let p2 = String (contacts[(contacts.length - 1)].name) + ", ";
        p2 = p2 + String (contacts[(contacts.length - 1)].phone) + ", ";
        p2 = p2 + String (contacts[(contacts.length - 1)].email);
        alert (p2);
        break;
    case 3:
        contacts[contacts.length] = {
            name: prompt("Informe o nome do contato: "),
            phone: prompt("Infomre o telefone: "),
            email: prompt ("Informe o endereço eletrônico: ")
        }
        alert (contacts[contacts.length - 1].name);
        alert (contacts[contacts.length - 1].phone);
        alert (contacts[contacts.length - 1].email);
        break;
    default:
        alert("Insira uma operação válida [1, 2 ou 3]"); 
}
