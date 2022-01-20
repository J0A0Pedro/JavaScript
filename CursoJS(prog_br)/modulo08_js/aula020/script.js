
function criarAluno(nome, n1, n2){
    return{
        nome:nome, 
        nota1: n1, 
        nota2: n2, 

        media: function(){
            return(this.nota1 + this.nota2) / 2;
        }  

    }
}


//Aqui são os alunos. Podemos adicionar mais aqui, ou seguir o exemplo da julia e criar uma variável e adicionar por ela separadamente
var turma = [
    criarAluno("Igor", 9, 6), 
    criarAluno("Maria", 7, 4), 
    criarAluno("Marcela", 8, 7.5)
]
//var aluno = turma[2];


//varrendo o array com for:

for (var aluno of turma){
    console.log("Nome: " + aluno.nome + " - Média: " + aluno.media());
}


/*varrendo o array com foreach
turma.forEach( function(elemento){
    console.log(elemento)
})*/



//aluna fora da turma
var aluno = criarAluno("Julia", 8, 7.5); 


console.log(aluno); //aqui é a julia que foi adicionada depois
console.log(aluno.media()); //sua média



//outra maneira de criar um objeto, instanciando


/*
var a = new aluno_00("Roberta", 8, 7);

console.log(a.media());



function aluno_00(nome, n1, n2){
    this.nome = nome;
    this.nota01 = n1;
    this.nota02 = n2; 

    this.media = function(){
        return(this.nota01 + this.nota02) / 2; 
    }

}
*/