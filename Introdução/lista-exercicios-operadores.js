// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária,
// depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao,
// considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldo = 5000;
let deposito = 2000;
let saque = 2500;

saldo += deposito;
console.log(saldo);
saldo -= saque;
console.log(saldo);

// Crie uma variável numérica com um valor. 
// Utilize um operador ternário para verificar se esse valor é par ou ímpar. 
// Exiba o resultado no console.


const number = 10;
const validacao = number % 2 === 0 ? 'Par' : 'Impar'
console.log(validacao);


// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. 
// Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

let logado = true;
let permissaoDeAdmin = true;

let verificandoUsuario = logado && permissaoDeAdmin ? 'Usuário logado e com permissões!' : 'Usuário deslogado ou sem permissões!';
console.log(verificandoUsuario);


// Declare duas variáveis booleanas e use o operador OR 
// para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

const diaChuvoso = true;
const diaDeNeve = false;

const tempoLaFora = diaChuvoso || diaDeNeve ? 'Sim! Hoje estará chovendo, nevando ou ambos!' : 'Não vai chover e nem nevar hoje!';
console.log(tempoLaFora);


// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show.
// Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

const idadeMinima = 18;
const idadeUsuario = 19;

const verificarIdade = idadeUsuario >= idadeMinima ? 'Pode realizar a compra' : 'Não pode comprar o ingresso!'
console.log(verificarIdade);