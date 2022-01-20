var nota1 = 8.0;
var nota2 = 8.0;


var media = (nota1 + nota2) / 2;

//ótimo acima de 8.0 
//bom entre 6.5 e 8.0
//regular abaixo de 6.5

console.log("Media: " + media);

var conceito = ""

if(media >= 8){
    conceito = "Ótimo";
}
else if(media >= 6.5){
    conceito = "Bom";
}
else{
    conceito = "Regular";
}

console.log(conceito);


 


switch(conceito){

    case "Ótimo":
        console.log("Parabéns! Você é um ótimo aluno!");
        break;

    case "Bom":
        console.log("Você está quase perfeito!");
        break;
        
    case "Regular":
        console.log("Estude mais um pouco");
        break;

    default:
        console.log("Houve algum erro");
        break;
}


/*
if(media >= 8){
    console.log("Ótimo");
}
else if(media >= 6.5){
    console.log("Bom");
}
else{
    console.log("Regular");
}
*/