// Crie uma variável contendo uma frase.
// Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

let frase = 'Pedro é um estudante de Sistemas de Informação!';
console.log(frase.length);
console.log(frase.toUpperCase());

// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição
// (resultando em undefined).
// Exiba os valores no console.

let valor1 = null;
let valor2;

console.log(valor1);
console.log(valor2);

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de 
// dados (number, string, boolean)
// em uma única string e exiba o resultado no console.

let nome = 'Pedro';
let num = 10;
let boolean = true;

console.log(`Meu nome é ${nome}? Se sim coloque true após essa linha, se não, false: ${boolean}. Acertei o número, tirei nota ${num}!`);

// Crie uma variável numérica e uma string. 
// Faça a conversão da variável numérica para string e da string para número.
// Exiba os tipos de dados resultantes no console.

let num1 = 11;
let nome3 = '10Petter';

num = String(num1);
nome = Number(nome3);

console.log(typeof num);
console.log(typeof nome3);

// Crie uma variável com uma string e utilize métodos de manipulação de strings, 
// como toUpperCase, toLowerCase, slice ou outros, para modificar a string original.
// Exiba os resultados finais no console.

let nome2 = 'Pedro Henrique dos Santos';
console.log(nome2.toLowerCase());
console.log(nome2.toUpperCase());
console.log(nome2.slice(0, 6));
