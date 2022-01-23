//carne - 400g por pessoa + de 6 horas 650
//cerveja - 1200 ml por pessoa + de 6 horas 1500ml
//refrigerante/agua - 1000ml por pessoa + de 6 horas 1500ml 

//crianças valem po 0,5

let input_adultos = document.getElementById("adultos");
let input_criancas = document.getElementById("criancas");
let input_duracao =document.getElementById("duracao");
let resultado = document.getElementById("res");

function calcular(){

    let adultos = input_adultos.value;
    let criancas = input_criancas.value;

    let duracao = input_duracao.value; 

    let qtd_totalCarne = carneporPesoa(duracao) * adultos + ((carneporPesoa(duracao) / 2 * criancas));
    let qtd_totalCerveja = cervejaporPesoa(duracao) * adultos;
    
    let qtd_totalBebidas = bebidasporPesoa(duracao) * adultos + ((bebidasporPesoa(duracao) / 2 * criancas));
    

    resultado.innerText = `${qtd_totalCarne/1000}Kg de Carne\n`
    
    resultado.innerText += `${Math.ceil(qtd_totalCerveja/355)} Latas de Cerveja\n`
    
    resultado.innerText += `${Math.ceil(qtd_totalBebidas/2000)} Garrafas de Bebidas de 2 litros\n`
}


function carneporPesoa(duracao){
    if(duracao >= 6){
        return 650;
    }
    else{
        return 400;
    }
}


function cervejaporPesoa(duracao){
    if(duracao >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function bebidasporPesoa(duracao){
    if(duracao >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}