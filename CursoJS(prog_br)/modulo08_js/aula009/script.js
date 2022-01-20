// && e 
// || ou 
// Negativo


var a = true; 
var b = true;

var c = a && b; //A true e B tbm é true? A resposta é não, então o resultado é false

    //Com &&://
//true e false = false 
//false e true = false
//false e false = false 
//true e true = true


var idade = 35;

var maior20 = idade >= 20; 
var menor30 = idade <= 30;

var entre = maior20 && menor30


console.log("Idade", idade);//35

console.log("Maior que vinte", maior20); //true, a idade é maior que 20

console.log("Menor que trinta", menor30); //false, a idade é maior que 30


console.log("Entre 20 e 30", entre);//false
//precisa que as duas condições sejam true para retornar true, do contrário todo o resto será false 




// Com || //

//Se um dos dois for trur, ele retorna true. Ele só é false no caso dos dois retornarem false

var idade2 = 9;

var sMenor10 = idade2 <= 10;
var sMaior65 = idade2 >= 65;

var gratuidade =  sMenor10 || sMaior65;


console.log("idade2", idade2);

console.log("Maior que 65", sMaior65);

console.log("Menor que 10", sMenor10);

console.log("Tem direito a gratuidade:", gratuidade);