/*
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



function alunoMais5anos(aluno){
    return {
        NewName: aluno.nome,
        NewAge: aluno.idade += 5 
    }
}

console.log(alunos.map(alunoMais5anos));

console.log(alunos);

//o array original foi alterado

*/



let alunoA = {
    nome: "Igor",
    idade: "15"
}

let alunoB = alunoA;

alunoB.nome = "Joao";
alunoB.idade = 25;



//COM OBJETO://

let pessoaA = {
    nome: "Igor",
    idade: 15
}


/*primeira maneira:
let pessoaB = Object.assign({}, pessoaA);*/

//segunda maneira:
let pessoaB = {...pessoaA}

pessoaB.idade = 39

console.log(pessoaB);
console.log(pessoaA);