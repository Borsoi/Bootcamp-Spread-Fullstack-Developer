function alunosAprovados(alunos, mediaFinal = 0) {
    const alunosAprovados = [];
    for (const aluno of alunos) {
        const {nota,nome} = aluno
        mediaFinal += nota
    }
    mediaFinal /= alunos.length;
    for (const aluno of alunos) {
        const {nota,nome} = aluno
        if(nota >= mediaFinal) {
            alunosAprovados.push(aluno);
        }
    }
    return alunosAprovados;
}

const arrayAlunos = [
    {
        nome: "Rodrigo Camburão",
        nota: 10,
        turma: "1B"},
    {
        nome: "Natasha Caldeirão",
        nota: 5,
        turma: "1B"},
    {
        nome: "Catarina Tubarão",
        nota: 7,
        turma: "2C"
    }
];

console.log(alunosAprovados(arrayAlunos));