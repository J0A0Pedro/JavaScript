// console.log($("#lista1").find(".item2").text("ITEM22222"));

//conseguimos substituir o texto


// console.log($("#lista1").html("<li> Novo Item 1</li> <li>Novo Item 2 </li>"))

//conseguimos substituir o html da nossa lista usando o .html(), mas isso não é possível usando o .text()


//Ou seja, se eu uso o .html() eu posso passar tags do html que ele será reconhecido, ao contrário do text() que não é  




// console.log($("#novo").val("Arroz"));



console.log($("#novo").attr("name", "Item de compra"));
//substituimos o valor do name de "Nome novo" para "Item de compra"



console.log($("li").attr("atributo_nome", "Item"));

//colocamos atributos chamados "Item" em todo li


// console.log($("li").attr("atributo_nome", function(i){
//     return "item" + (i+1)
// }));




// $("li").attr("atributo_nome", function(i, oValue){
//     return oValue + i
// })


$("input").attr("maxlength", 10).attr("type", "password")