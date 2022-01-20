//uma lista com nome do aluno - nota1 - nota2 e média. Falar se ele esta aprovado ou reprovado. Nota mínima de 7. 



var nomes = ["Igor", "Jose", "Maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];


function media(n1, n2){
    return(n1 + n2) / 2;
}


function passou(media){
    if(media > 7){
        return " - APROVADO";
    }else{
        return " - REPROVADO";
    }
}

for(var indice in nomes){
    
    var nota1 = notasA[indice];
    var nota2 = notasB[indice];
    var m = passou(media(nota1, nota2));


    console.log("Nome: " + nomes[indice] + " -  Nota1: " + nota1 + " -  Nota2: " + nota2
                         + " - Média: " + media(nota1, nota2) + m );

}






 