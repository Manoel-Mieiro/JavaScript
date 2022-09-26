//We are setting up a small library of books about JavaScript programming. 
//We have three books, and we want to prepare a list of them. 
//We will store three pieces of information about each book: the title, the author, and the number of pages:

//1. Speaking JavaScript, Axel Rauschmayer, 460;
//2. Programming JavaScript Applications, Eric Elliott, 254;
//3. Understanding ECMAScript 6, Nicholas C. Zakas, 352.
    
    //*Create an array of three objects representing the books. Each object must have the following properties: title, author, pages.
    //*We’ve added a new book to our collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages. Use the appropriate method to
//do this, which will attach the book to the end of the array. Display the length of the array and, in turn, all the book names in the
//collection.
    //*Use the slice command to copy the last two books to the new array.
    //*The first book from the collection is lost in unexplained circumstances. You have already accepted the loss, so now remove it from the //array. Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection in
//turn.
//*Display the sum of the pages of all the books from the collection.

let lib = [{
title: "Speaking JavaScript",
author: "Axel Rainschmayer",
pages: 460
},
{
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254
},
{
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
}
];


let b4 = {
   title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};

lib.push(b4);
console.log(lib.length);
let j=0;
let tamanho = lib.length;
for (j=0 ; j<tamanho; j++){
console.log(lib[j].title);
}

let new_array = lib.slice(-2);
console.log (new_array);
lib.shift();
for (j=0 ; j<lib.length; j++){
    console.log(lib[j].title);
    }
let sum = 0;
for (j=0 ; j<lib.length; j++){
    sum = sum + lib[j].pages;
}
console.log(sum, " páginas.");