// Notas de Alunos – Dado um array com as notas de uma turma, calcule a média da turma.

const notas = [10, 7.5, 5.5, 9];
let soma = 0;


for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;
console.log(soma);
console.log(media);
