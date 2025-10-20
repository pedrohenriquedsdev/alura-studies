// 1️⃣ Função Declarada (Function Declaration)

function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao('Pedro');

function somar(a, b) {
    return a + b;
}

console.log(`Resultado da Soma: ${somar(4, 2)}`);


// 2️⃣ Função Expressa (Function Expression)

const multiplica = function (a, b) {
    return a * b;
}

console.log(`Resultado da multiplicação: ${multiplica(3, 7)}`);

const boasVindas = function (nome) {
    console.log(`Olá de Novo, ${nome}`);
}

boasVindas('Pedrinho');


// 3️⃣ Arrow Function

const dobrar = (a, b) => { return a * b; }
console.log(`Resultado da ArrowMultiplicação: ${dobrar(4, 3)}`);

const apresentarComNomeEIdade = (nome, idade) => { console.log(`Olá ${nome}, você possui idade = a: ${idade}`); }
apresentarComNomeEIdade('Pedro Henrique', 18);