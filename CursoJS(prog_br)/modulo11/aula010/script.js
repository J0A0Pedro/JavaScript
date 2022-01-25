let tela = document.getElementById("tela");



let context = tela.getContext("2d");


context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineWidth = 5; //espessura

context.strokeStyle = "blue"//altera cor
context.lineTo(500, 0);

context.stroke()//faz funcionar

//todas as tags canvas tem um objto onde iremos fazer o desenho, e o nome dele é contexto