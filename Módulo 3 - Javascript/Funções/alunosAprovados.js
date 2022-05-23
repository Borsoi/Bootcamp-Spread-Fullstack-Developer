function alunosAprovados(alunos, mediaFinal = 0) {
    const alunosAprovados = [];
    for (const aluno of alunos) {
        mediaFinal += aluno.nota
    }
    mediaFinal /= alunos.length;
    for (const aluno of alunos) {
        if(aluno.nota >= mediaFinal) {
            alunosAprovados.push(aluno);
        }
    }
    return alunosAprovados;
}

const arrayAlunos = [
    {nome: "Rodrigo Camburão",
    nota: 10},
    {nome: "Natasha Caldeirão",
    nota: 5}
];

console.log(alunosAprovados(arrayAlunos));