let tela = document.getElementById("tela");

let context = tela.getContext("2d");


context.beginPath();
context.strokeStyle = "red";
context.fillStyle = "red";



let x = 250;
let y = 250;
let raio = 100;
let inicio = 0;
let fim = 2 * Math.PI;

context.arc(x, y, raio, inicio, fim);

context.fill();
context.stroke();


//primeira posição é x

//segunda posição é y

//terceira posição é o raio do circulo (medido em radiano)

//quarta posição é o angulo q comeca 

//quinta posição é o angulo q termina
