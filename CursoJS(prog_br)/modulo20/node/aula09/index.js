let args = process.argv.slice(2);
let a = Number(args[1]);
let b = Number(args[2]);
let c = ""
let calc = require("./calc");


let div = require("./calc").div;



if(args[0] == "s"){

    c = calc.soma(a, b);

    console.log(`A soma de ${a} mais ${b} é igual a: ${c}`);
}
else if(args[0] == "m"){

    c = calc.mult(a, b);

    console.log(`A multiplicação de ${a} por ${b} é igual a: ${c}`);
}
//usando outra forma:

else if(args[0] == "d"){

    c = div(a, b);

    console.log(`A divisão de ${a} por ${b} é igual a: ${c}`);
}

console.log(calc);