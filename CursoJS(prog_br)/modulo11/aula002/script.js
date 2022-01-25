let lista = document.getElementById("lista");



let num = parseInt(lista.getAttribute("num"))

let conteudo = ""

for(let i = 0; i < num; i++){

    conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo;













/*
let image = document.getElementById("like");

image.addEventListener("click", function(){




    image.setAttribute("cor", "vermelho");


    
    let lastImage = image.getAttribute("src");

    image.setAttribute("src", "thumbs_down.png")

    console.log(lastImage)
    
})
*/
 