"use strict";
/*x = 7;

console.log(x);
console.log(window)*/

function imprimir(){
    x = 7;
    console.log(x);
}
imprimir()
console.log(window)

//agr eu n tenho declarada pq esta dentro de uma function, mas se eu tirar o var ela volta.

//Quando a gente cria a variável dentro da uma function, ela só vai ficar no seu escopo local da function, mas se vc tirar o var dela e deixar só o x = 7, o js cria o x como um escopo global

//"use strict" torna obrigatório declarar uma variavel, assim se vc esquecer ela vc não corre risco dela se tornar uma  global e acabar interferindo no resto do código.
