let tela = document.getElementById("tela");

let context = tela.getContext("2d");



let circle = {
     x: 250,
     y: 250,
     raio: 100,
     inicio: 0,
     fim: 0, 
     antiHor: true
}
function drawCircle(circle){
        

    context.beginPath();
    context.rect(0, 0, 500, 500);
    context.fillStyle = "black";
    context.fill();


    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "red";




    context.arc(circle.x, circle.y, circle.raio, circle.inicio, circle.fim, circle.antiHor);

    context.fill();
    context.stroke();
}

setInterval(function(){
 if(circle.fim < 2 * Math.PI){
     circle.fim += 0.3;
     circle.x += 3;
 }
    drawCircle(circle);
}, 400)



