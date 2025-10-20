// const numeros = [2, 4, 6, 8, 10];

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const numeros = [2, 4, 6, 8, 10];

for (let i = 0; i < numeros.length; i++) {
    console.log(`indice ${i}: `, numeros[i]);
}

// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

let soma = 0;

const numeros = [2, 4, 6, 8, 10];
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);

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

// Crie um programa que utilize um laço for para percorrer uma array const numeros =
// [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (const numero of numeros) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
}

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

let soma = 0;

const notas = [7, 6, 8];

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    media = soma / notas.length;

}

console.log(soma);
console.log(media);