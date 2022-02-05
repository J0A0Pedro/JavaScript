
/*function dobro (x){
    console.log(2 * x);
}
dobro(5);
//10
*/

/*
let dobro = function(x){
    console.log(2 * x);
}
dobro(2);
//4
*/



let dobro = (x) => {
    console.log(2 * x)
}
dobro(10);
//20

 
let metade = x => {
    return ( x / 2);
}
console.log(metade(10));
//5



let metade2 = x => ( x / 2);

console.log(metade2(10));
//5






/*let triplo = () => console.log(this);*/


let triplo = function (){
    return 3 * this.x;
}

let numero = {
    x: 8, 
    d: triplo
}

numero.d();

console.log(numero.d());
//24