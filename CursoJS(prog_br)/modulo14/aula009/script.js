
function novoAluno(nome, idade){
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
]



function nomeIdade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos"
}

console.log(alunos.map(nomeIdade))


//cuidado:

function alunoMais5anos(aluno){
    return {
        NewName: aluno.nome,
        NewAge: aluno.idade += 5 
    }
}

console.log(alunos.map(alunoMais5anos));

console.log(alunos);

//o array original foi alterado