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

// let soma = 0;

// const numeros = [2, 4, 6, 8, 10];
// for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
// }

// console.log(soma);

// Crie uma função que receba uma array de números inteiros
// e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

const numerosInteiros = [2, 4, 6, 8, 10, 12];

let maior = numerosInteiros[0];
let menor = numerosInteiros[0];

for (let i = 0; i < numerosInteiros.length; i++) {
    if (numerosInteiros[i] < menor) {
        menor = numerosInteiros[i];
    }
    if (numerosInteiros[i] > maior) {
        maior = numerosInteiros[i];
    }
}

console.log(`O menor número é o: ${menor}`);
console.log(`O maior número é o: ${maior}`);