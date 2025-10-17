let entradaConfirmada = true;

if (entradaConfirmada) {
    const boasVindas = () => {
        console.log('Boas Vindas ao Seu Gerenciador de Compras!');
    };

    const gerarLista = () => {
        let lista = [];
        console.log(`Lista gerada (Lista Vazia): ${lista}`);

        const addElementoLista = () => {
            lista.push('Pedro', 123, 'alli', 'leo', 222);
        };

        const elementosAdicionados = () => {
            console.log(`Itens adicionados: ${lista}`);
        };

        const removeItens = () => {
            lista.splice(0, 1);
        };

        const exibirLista = () => {
            console.log(`Lista pós alterações: ${lista}`);
        };

        addElementoLista();
        elementosAdicionados();
        removeItens();
        exibirLista();
    };

    boasVindas();
    gerarLista();

} else {
    console.log('Sua entrada não foi válida!');
}
