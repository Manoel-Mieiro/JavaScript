/*
Easy

Objectives
Familiarize the student with:

loops (what are loops, the while loop, the do–while loop, the for loop, the for–of loop, the for–in loop, the break and continue statements)
Scenario
We can improve our contact list program a bit by using loops. You can now try to display not only the first or last contact, but all contacts in the list, regardless of their number.

Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what they want to do. The user can choose to:

display the first contact (first)
display the last contact (last)
display all contacts (all)
add a new contact (new)
exit the program (quit)
After executing the selected action, the program will give the opportunity to choose again. The program should end the actions only after the user gives a specified command, for example quit.
*/


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

let i = contacts.length;
let j = 0;
let choice;

alert("A seguir, a tabela de ações do programa:\n 1 - Digite First para exibir o primeiro contato da lista\n2 - Digite Last para exibir o último contato da lista\n 3 - Digite All para exibir todos os contatos\n 4 - Digite Quit para sair do programa");





while ((choice != "Quit") || (choice != "quit")) {
    choice = prompt("Favor informar a ação desejada:");

    switch (choice) {
        case "First":
        case "first":
            alert("Eis o primeiro contato: " + "\n" + contacts[0].name + "\n" + contacts[0].phone + "\n" + contacts[0].email);
            break;
        case "Last":
        case "last":
            alert("Eis o último contato: " + "\n" + contacts[i - 1].name + "\n" + contacts[i - 1].phone + "\n" + contacts[i - 1].email);
            break;
        case "All":
        case "all":
            for (j = 0; j < i; j++) {
                alert(j + 1 + "º :" + "\n" + contacts[j].name + "\n" + contacts[j].phone + "\n" + contacts[j].email);
            }

            break;
        case "New":
        case "new":
            contacts.push({ name: prompt("Insira o nome do contato: "), phone: prompt("Informe o número de telefone: "), email: prompt("Informe o endereço eletrônico: ") });
            i++;
            break;
        case "Quit":
        case "quit":
            alert("Programa encerrado!");
            exit(0);
        default:
            alert("Entrada inválida, programa encerrado!");
            exit(0);
    }
};

