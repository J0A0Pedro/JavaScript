// let soma = require("./calc");
// let mult = require("./calc");
// let div = require("./calc");

let calc = require("./calc");   

let args = process.argv.slice(2);



console.log("s = soma, m = multiplicação, d = divisão");

 
let a = Number(args[1]);
let b = Number(args[2]);
let c = "";




if(args[0] == "s"){
    c = calc.soma(a, b);
    console.log(`A soma de ${a} mais ${b} é igual a: ${c}`);
}
else if(args[0] == "m"){
    c = calc.mult(a, b);
    console.log(`A multiplicação de ${a} por ${b} é igual a: ${c}`)
}
else if(args[0] == "d"){
    c = calc.div(a, b)
    console.log(`A divisão de ${a} por ${b} é igual a: ${c}`)
}
else{
    c = console.log("Opção inválida");
}




