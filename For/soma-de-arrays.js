const numeros = [1, 4, 5, 6, 10];
const tamanho = numeros.length;
let soma = 0;

for (let i = 0; i < tamanho; i++) {
    soma += numeros[i];
}

console.log(soma);