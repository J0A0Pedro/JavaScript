let tela = document.getElementById("tela");
let context = tela.getContext("2d");


/*
let img = document.getElementById("red");

//Primeira maneira de carrehar img para o canvas://
context.drawImage(img, 20, 20);
*/


//Sgunda maneira de carregar img://

let img = new Image();


img.src = "./img/thumbs_down.png";

img.onload = desenharImg;


function desenharImg(){
    
    context.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2);


    //outra forma para lidar com width e height do img:
    //this.naturalWidth/2 e this.naturalHeight/2 
}


