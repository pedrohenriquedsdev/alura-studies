let entradaConfirmada = true;

if (entradaConfirmada) {
    function boasVindas() {
        console.log('Boas Vindas ao Seu Gerenciador de Compras!');
    }

    function gerarLista() {
        let lista = [];
        console.log(`Lista gerada (Lista Vazia): ${lista}`);

        function addElementoLista() {
            lista.push('Pedro', 123, 'alli', 'leo', 222);

        }

        function elementosAdicionados() {
            console.log(`Itens adicionados: ${lista}`);
        }

        function removeItens() {
            lista.splice(0, 1);
        }


        function exibirLista() {
            console.log(`Lista pós alterações: ${lista}`);
        }

        addElementoLista();
        elementosAdicionados();
        removeItens();
        exibirLista();

    }

    boasVindas();
    gerarLista();

} else {
    console.log('Sua entrada não foi válidada!')
}


