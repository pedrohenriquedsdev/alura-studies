// 🟢 Fácil

// Verifique se uma pessoa é maior ou menor de idade.

// Diga se um número é par ou ímpar.

// let idade = 17;
// let verificacao = idade >= 18 ? 'Maior de Idade' : 'Menor de Idade';
// console.log(verificacao);

// let numero = 4;
// let validacaoDeNumero = numero % 2 === 0 ? 'Par' : 'Ímpar';
// console.log(validacaoDeNumero);



// 🟠 Médio

// Mostre “Aprovado” se a nota for maior ou igual a 6, senão “Reprovado”.

// Exiba “Desconto aplicado” se o valor da compra for maior que 100, senão “Sem desconto”.

// const nota = 5.9;
// let validacao = nota >= 6 ? 'Aprovado' : 'Reprovado';
// console.log(validacao);

// const valorCompra = 101;
// let validacaoValorCompra = valorCompra > 100 ? 'Desconto Aplicado' : 'Sem desconto';
// console.log(validacaoValorCompra);




// 🔴 Difícil

// Mostre “Login bem-sucedido” se o usuário e a senha estiverem corretos, senão “Falha no login”.

// Exiba “Pode dirigir” se a pessoa tiver mais de 18 anos e possuir carteira, senão “Não pode dirigir”.


const usuario = 'Pedro';
const senha = 'Pe123456!';
const usuarioTentativa = 'Pedro';
const senhaTentativa = 'Pe123456!';

const validacao = usuarioTentativa === usuario && senhaTentativa === senha ? 'Login bem-sucedido' : 'Falha no Login';
console.log(validacao);

const permissaoParaDirigir = true;
const idade = 18;

const validarPermissao = permissaoParaDirigir && idade >= 18 ? 'Pode Dirigir' : 'Não pode Dirigir';
console.log(validarPermissao);
