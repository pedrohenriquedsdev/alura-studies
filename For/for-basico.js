// const numeros = [2, 4, 6, 8, 10];

// for (let indice = 0; indice < numeros.length; indice++) {
//     console.log(numeros[indice]);
// }

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

// const numeros = [2, 4, 6, 8, 10];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(`indice ${i}: `, numeros[i]);
// }

// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

let soma = 0;

const numeros = [2, 4, 6, 8, 10];
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);
