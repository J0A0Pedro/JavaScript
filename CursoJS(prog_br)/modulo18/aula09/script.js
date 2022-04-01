
//USANDO O .TEXT()
console.log($("#lista1").text());
//retorna isso:
// Item 1
// Item 2
// Item 3
// Item 4
// Item 5


//USANDO O .HTML()
console.log($("#lista1").html());
//retorna isso:
/* 
<li class="item1">Item 1</li>
<li class="item2">Item 2</li>
<li class="item3">Item 3</li>
<li class="item4">Item 4</li>
<li class="item5">Item 5</li> 
*/


//para pegar um texto podemos usar o .text() ou também .html()

//Temos essas duas maneiras de pegar isso, mas qual devo usar? 

//Com o text() nos pegamos o texto, com o html() nos pegamos todo o html dele em si









//mais uma maneira de pegar um conteudo de um elemento

//USANDO .VAL()
console.log($("#novo").val())
//retorna:
//Novo item


//com .val() podemos pegar o vaor dentro de um input







//COMO PEGAR O ATRIBUTO?
//USANDO .ATTR()

console.log($("#novo").attr("name"));