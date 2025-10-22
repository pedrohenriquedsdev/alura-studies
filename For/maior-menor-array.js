const numerosInteiros = [12, 9, 22, 2, 8, 7];
let maior = numerosInteiros[0];
let menor = numerosInteiros[0];

for (let i = 0; i < numerosInteiros.length; i++) {
    if (numerosInteiros[i] < menor) {
        numerosInteiros[i] = menor;
    }
    if (numerosInteiros[i] > maior) {
        numerosInteiros[i] = maior
    }
}

console.log(menor);
console.log(maior);