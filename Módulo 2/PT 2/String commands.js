let str = "java script language";

console.log(str.length); // -> 20 (Tamanho da string)
console.log('test'.length); // -> 4 (Tamanho da string)

console.log(str.charAt(0)); // -> 'j'   (Seleciona um char indexado por 0 [start])
console.log('abc'.charAt(1)); // -> 'b' 

console.log(str.slice(0, 4)); // -> 'java'  (Seleciona um intervalo via indexação; o primeiro argumento
// inicia o index e o último limita [não toca] o index)
console.log('test'.slice(1, 3)); // -> 'es'

console.log(str.split(' ')); // -> ['java', 'script', 'language']   (Remove da string o conteúdo do argumento
//e cria uma nova string)
console.log('192.168.1.1'.split('.'));  // -> ['192', '168', '1', '1']
