// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada.
// Em seguida, chame a função e exiba a saudação no console.

function saudar(nome) {
    console.log(`Olá, ${nome}`);
}

saudar('Pedro');



// Crie uma função que receba a idade de uma pessoa e retorne 
// se ela é maior de idade (idade >= 18). Imprima o resultado no console.

function validacaoIdade(idade) {
    if (idade >= 18) {
        return 'Maior de Idade!';
    } else {
        return 'Menor de Idade!';
    }
}

console.log(validacaoIdade(18));



// Crie uma função que receba uma string e verifique se é um palíndromo 
// (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). 
// Retorne true se for um palíndromo e false caso contrário. 
// Imprima o resultado no console.

function verificaPossivelPalidromo(palavra) {
    if (palavra === palavra.split('').reverse().join('')) { //gambiarra
        return true;
    } else {
        return false;
    }
}

console.log(verificaPossivelPalidromo('ovo'));



// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles.
// Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

function validandoOMaior(a, b, c) {
    if (a > b && a > c) {
        return `A: ${a}`;
    } else if (b > a && b > c) {
        return `B: ${b}`;
    } else if (c > a && c > b) {
        return `C: ${c}`;
    } else {
        return 'Existem valores iguais!';
    }
}

console.log(validandoOMaior(4, 20, 3));



// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: 
// a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calculaPotencia = (base, expoente) => base ** expoente;

console.log(calculaPotencia(2, 5));