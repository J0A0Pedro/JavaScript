// $(".item2").click( () => {
//     $("#lista1 > .item2").hide();
// });

//"#lista1 > .item2" vai pegar os descendentes da lista 1, assim o item2 na lista2 não vai sumir, somente o da lista1


//FIND()
let lista1 = $("#lista1");

// lista1.find(".item5").hide();

//.find("") permite encontrar, dentro do elemento que já foi selecionado (no caso seria o lista1), um descendente sem precisar usar o #lista1 > *elemento buscado*


//CHILDREN

console.log(lista1.children());

//o children() mostra todos os items da nossa lista, temos acesso a todos os filhos do nosso elemento 

//o find() exige que vc passe algum seletor/argumento para servir de filtro pra essa função e ele vai retornar só os filhos que corresponde ao filtro passado


//EXEMPLO:

// lista1.children().fadeOut(4000) //seleciona toda a lista

// lista1.find(".item2").fadeOut(4000); //seleciona apena o item2 da lista1


//podemos usar o children() para selecinar tudo de uma vez e fazer uma alteração geral, o find() já é mais específico para um único elemento




//o children() também permite um seletor caso não queiramos selecionar todos os filhos, mas não é tão profundo, o find() abrange mais 

let body = $("body");

console.log(body.children("#lista1"));
