// 🟡 2️⃣ Exercício intermediário

// Crie uma arrow function chamada dobrarNumeros que receba um array de números e retorne um novo array com todos os valores dobrados.

// Exemplo:

const dobrarNumeros = (array) => {
    const novoArray = array.map((number) => number * 2);
    console.log(novoArray);
}

dobrarNumeros([2, 5, 6]);