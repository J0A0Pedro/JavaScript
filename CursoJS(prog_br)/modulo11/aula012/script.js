let tela = document.getElementById("tela");

let context = tela.getContext("2d");


//Retângulo preenchido://
/*context.fillStyle = "black"; 
context.fillRect(10, 10, 100, 200);*/

//fillRect: Primeira cordenada é a cordenada X, que é a distância que tem da borda para o local q eu quero q o retângulo comece . A segunda é Y seguido de largura e altura. 



//Retângulo Só a Borda://
//context.strokeStyle = "white";
//context.strokeRect(10, 10, 100, 200);


//Outra forma://
//strokeStyle é a borda. fillStyle é a cor de dentro q preenche

context.rect(10, 10, 100, 200);
context.strokeStyle = "white";
context.fillStyle = "black";
context.lineWidth = 5;
context.fill()
context.stroke()

context.clearRect(20, 20, 30, 30)