
function calcMedia(){
    return (this.notas[0] + this.notas[1]) / 2 ;
}


var aluno = {

    media: calcMedia, 

    nome: "Igor",
    notas: [10, 10]

}

console.log(aluno.nome);
console.log(aluno.media());




var aluno1 = {

    media: calcMedia, 

    nome: "Joao",
    notas: [5, 5]

}


console.log(aluno1.nome);
console.log(aluno1.media());











//teste só pra fixar melhor...

/*
function calcNota(){
    return (this.nota[0] + this.nota[1]);
}


var animes = {


    media: calcNota, 

    nome: "Tokyo Ghoul",
    nota: [7, 8],

}

var animes2 = {
    media: calcNota,

    nome2: "Dragon Ball", 
    nota: [10, 10], 
}

var animes3 = {
    media: calcNota,

    
    nome3: "Attack on Titan", 
    nota: [7, 8]
}

console.log(animes.nome + " - ", animes2.nome2 + " - ", animes3.nome3);
console.log("A soma de seus pontos são, respectivamente: " + animes.media() + " - ", animes2.media() + " - ", animes3.media())
*/
