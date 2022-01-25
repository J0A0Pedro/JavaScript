let tela = document.getElementById("tela");

let context = tela.getContext("2d");



//PRIMEIRA LINHA://
context.beginPath();//caminho da nossa lilnha

context.lineWidth = 4;
context.strokeStyle = "blue";
context.moveTo(10, 10);
context.lineTo(400, 300);
context.stroke();

//SEGUNDA LINHA://

context.beginPath(); //abre um novo caminho
context.lineWidth = 7;
context.strokeStyle = "pink"; 
context.fillStyle = "white";

context.moveTo(50, 10); //inicio da linha 
context.lineTo(300, 300);
context.lineTo(200, 300);

context.closePath(); //fecha o caminho

context.fill();//a ordem aqui faz diferença
context.stroke();
