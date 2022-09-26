let counter;
console.log(counter); // -> undefined
{
    counter = 1;
    {
        console.log(counter); // -> 1
    }
}
counter = counter + 1;
console.log(counter); // -> 2
//Ao chavear uma chave, estamos fazendo algo chamado "nesting"

