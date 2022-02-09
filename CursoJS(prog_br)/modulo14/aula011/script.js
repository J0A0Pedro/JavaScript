

function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
]


function idadeDaTurma(total, aluno){

    return total + aluno.idade;   
}

console.log(alunos.reduce(idadeDaTurma, 0))
//132





function nomeDaTurma(nomezao, aluno){

    return nomezao + aluno.nome;   
}

console.log(alunos.reduce(nomeDaTurma, ""))
//MarioJoséMarciaJoao



function mediaIdade(media, aluno){

    return media + aluno.idade / alunos.length
}

console.log(`A média de idade dos alunos é ${alunos.reduce(mediaIdade, 0)}`);

/*console.log(alunos.reduce(mediaIdade, 0))*/