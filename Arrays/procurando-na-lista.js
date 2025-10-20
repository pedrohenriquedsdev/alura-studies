const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];
const lista = [alunos, medias];

const exibeNomeENota = (aluno) => {
    if (lista[0].includes(aluno)) {
        console.log(`Aluno encontrado: ${aluno}`);
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`Média: ${mediaAluno}`);
    } else {
        console.log('Esse aluno não existe!')
    }
}

exibeNomeENota('Ana');