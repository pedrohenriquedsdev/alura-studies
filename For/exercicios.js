// 🟡 Nível Intermediário – praticar lógica

// Contar vogais em uma palavra
// Peça uma palavra (ex: "javascript") e conte quantas vogais tem.

const palavra = "javascript";
let contadorDeVogais = 0;
const vogais = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i].toLowerCase())) {
        contadorDeVogais++;
    }
}

console.log(contadorDeVogais);