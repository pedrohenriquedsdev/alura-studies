const { stderr, stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});


let filmeFavorito = null;

rl.question('Digite seu filme favorito: ', (filme) => {
    filmeFavorito = filme;
    rl.close();
});

