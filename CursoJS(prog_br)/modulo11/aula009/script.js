let jogador = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;


function mover_jogador_para(x, y){
    
    let posX = x + "px";
    let posY = y + "px";

    jogador.style.top = posX;
    jogador.style.left =posY;

}


setInterval(function(){
    mover_jogador_para(xInicial++, yInicial++);
}, 24);