let lista = document.getElementById("lista");


lista.dataset.n = "4";

let id = parseInt(lista.dataset.id);
//let id = lista.getAttribute("data-id")
console.log(id)


let num = parseInt(lista.dataset.n);



let conteudo = ""

for (let i =0; i < num; i++){
    conteudo += "<li>" + i + "</li>"
}
lista.innerHTML = conteudo;