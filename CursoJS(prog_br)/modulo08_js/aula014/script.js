
var alunos = ["Igor", "Jose", "Marcos", "Mariana", "Joana", "Leo", "Joao"]


/*
for(var aluno in alunos){
    console.log(aluno);
}*/
//O for() com in mostra somente seus indices, que seriam 0, 1, 2, 3, 4, 5, 6.




for(var aluno of alunos){
    console.log(aluno);
}
//O for() com of mostra seus elementos em si, que seriam Igor, Jose, Marcos, Mariana, Joana, Leo, Joao.




/*
for(var i=0; i < alunos.length; i++){
    console.log(alunos[i]);
}*/


