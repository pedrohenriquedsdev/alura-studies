//

const inventarioProdutos = [
  'Notebook',
  'Smartphone',
  'Teclado',
  'Mouse',
  'Monitor',
  'Impressora',
  'Fone de ouvido',
  'Câmera',
  'Tablet',
  'Carregador'
];

// Função que verifica se o produto está no inventário
function estaNoInventario(nomeProduto) {
  return inventarioProdutos.includes(nomeProduto);
}

// Função que retorna o índice do produto, ou -1 se não estiver
function obterIndiceProduto(nomeProduto) {
  return inventarioProdutos.indexOf(nomeProduto);
}

console.log(estaNoInventario('Mouse'));
console.log('Mouse');