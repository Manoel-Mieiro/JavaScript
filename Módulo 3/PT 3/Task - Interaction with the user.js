let w = prompt ("Insira a largura: ");
w = w ? w : 1;
w = Number(w);
let h = prompt ("Insira a altura: ");
h = h ? h : 1;
h = Number(h);
let l = prompt ("Insira o comprimento: ");
l = l ? l : 1;
l = Number(l);

let volume = w*h*l;

alert ("O volume da caixa é de " + volume + " unidades cúbicas.");

