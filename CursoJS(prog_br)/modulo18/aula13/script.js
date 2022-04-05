

// $("#lista1").html("<li>Teste</li>");

//Quando adicionamos um novo elemento html a nossa lista, ele apaga todos os itens que tinha anteriormente e colocou o novo

//Ta, a gente conseguiu substituir, mas e se eu quisesse adicionar sem apagar os outros itens q ja tinham lá?   


//primeira maneira:

let lista1 = $("#lista1");
let items = lista1.html();

$(lista1).html(items + "<li> Teste 6.1 - Concatenando</li>");

//conseguimos adicionar sem apagar os itens já existentes!


//MAS EXISTE UM JEITO MELHOR!

//APPEND():

//Append é juntar, pegar tudo que ja tinha e colocar mais um no final


let nova_lista1 = $("#lista1");

nova_lista1.append("<li> Teste 7 - Append()</li>");


//E se eu quisesse adicionar o novo item no inicio?
//PREPEND()
nova_lista1.prepend("<li> Teste 0.1 - Prepend() </li>");



//after()
nova_lista1.after("<li> Teste - After() </li>");
//a nova linha after esta depois do fechamento do meu elemento lista1 e depois entra isso q passamos

//before()
nova_lista1.before("<li> Teste - Before() </li>");
//o before coloca antes da nossa lista abrir ele vai colocar antes



let rect = $(".rect");
rect.append(" - Teste do Append()");
//ele entra depois do conteudo que ja tinha na nossa div

rect.prepend("Teste do Prepend() - ");
//entra antes do conteudo q ja tinha na div

rect.before("Teste do Before()");
//ele entra antes da div, nao esta mais dentro da div

rect.after("  -  Teste do After()");
//ele entra depois da div, não esta mais dentro da div


let nome = "Joao";
let sobrenome = "Pedro";

rect.after(nome," ", sobrenome);
//isso serve para todos os metodos que vimos aqui