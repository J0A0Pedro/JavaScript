


// $("h1").click( () => {

//     $("h1").addClass("bg_blue");

// });

//Podemos passar nossa classe com .addClass()



//$("h1").addClass("bg_blue");

// setTimeout( () => {
//     $("h1").addClass("bg_blue");
// }, 2000);

//adicionamos a classe 

// setTimeout( () => {
//     $("h1").removeClass("bg_blue");
// },4000);
//removemos a classe


//podemos remover a classe com .removeClass()




//toggleClass()
//O toggleClass faz com que seja possivel remover ou adicionar uma classe dependendo de seu estado. Ou seja, se o h1 ja estiver com uma classe aplicada, o toggleClass vai remover, e se o h1 não estiver com uma classe aplicada, o toggleClass vai adicionar

//Exemplo:

// setTimeout( () => {
//     $("h1").toggleClass("bg_red")
// }, 1000);

// setTimeout( () => {
//     $("h1").toggleClass("bg_red");
// },3000);



// setInterval( () => {
//     $("h1").toggleClass("bg_red");
// },300);

//SetInterval deixou em loop o toggleClass





//.css()


$("h1").toggleClass("bg_blue");

console.log($("h1").css("background-color"));
//nos mostra as propriedades dos elementos passados 

console.log($("h1").css("font-size", "80px"));
//retornou 32px que é o tamanho da nossa fonte. Podemos passar outro argumento apos a virgula que vai redefinir a propriedade. O font-size tem 50px agora


//podemos encurtar isso e passar várias propriedades em uma linha usando chave, criando uma relação de chave e valor


$("h1").css({"background-color": "red", "font-size": "25px", "border-radius": "10px", "padding": "10px", "text-align": "center"});

//redefinimos o background do h1 e o font-size em uma linha. Também criamos novas propriedades dentro da chave

