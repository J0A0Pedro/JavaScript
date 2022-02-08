
//filter, map, reduce


/*let alunos = [];


function novoAluno(nome, idade){
    return {nome, idade}
    
    
    alunos.push(nome, idade);   
}
*/
/*
novoAluno("Marcos", 16);
novoAluno("José", 18);
novoAluno("Reinaldo", 20);

console.log(alunos);*/






function novoAluno(nome, idade){
    return { nome, idade }
}


let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
]



let jogadores = [
    novoAluno("ZUZU", 23),
    novoAluno("LULU", 45),
    novoAluno("LALA", 29),
    novoAluno("LILI", 35)
]



/*

//usando for://

for(let aluno of alunos){
    if(aluno.idade < 30){
        console.log(aluno);
    }
}
//se o aluno dentro do array alunos tiver uma idade menor q 30 anos ele será mostrado

*/



//COM MENOS DE TRINTA ANOS://

function menosTrinta(aluno){

    return aluno.idade < 30;
}

let alunosMenosTrintaAnos = alunos.filter(menosTrinta)

console.log(alunosMenosTrintaAnos);



//COM MAIS DE TRINTA ANOS://



function maisTrinta(aluno){

    return aluno.idade > 30;
}

let alunosMaisTrintaAnos = alunos.filter(maisTrinta);

console.log(alunosMaisTrintaAnos);




/*
function filtro(callback){

    let alunosFiltrados = [];

    for(let aluno of this){
        if(callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }

    return alunosFiltrados;

}
*/



/*
alunos.filtro = filtro

jogadores.filtro = filtro

console.log(jogadores.filtro(maisTrinta));

console.log(alunos.filtro(menosTrinta))

console.log(alunos.filtro(maisTrinta)); 
*/
