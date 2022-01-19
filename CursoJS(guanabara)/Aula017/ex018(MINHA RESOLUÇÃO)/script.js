



let número00 = document.querySelector('input#txtnumero') 
let adicionar00 = document.querySelector('button#adicionar')
let arraynum = [];

let lista = document.getElementById('flista')

let fi = document.getElementById('fi')



function Calcular(){
    if( número00.value <=1 || número00.value <= 100){
        alert('[ERRO] Número fora dos Padrões. Digite algo!')
        
    }
    else{
        arraynum.push(número00.value);
        window.alert(arraynum);

        let n = Number(número00.value)
        lista.innerHTML=''
        let c = true

        while( c == true){
            let item = document.createElement('option') //AQUI EU N COLOQUEI +=, TALVEZ SE EU COLOCAR, O VALOR CONTINUE A APARECER JUNTO AO OUTRO
            item.text+=`O valor ${n} foi adicionado com sucesso!`
            lista.appendChild(item)
            lista.innerHTML+=`${arraynum}`
            c++
            
        }
        
    }
    

}



function Finalizar(){  
    let n = Number(número00.value.length)
    
    var menorNúmero = 100
    
    for(i = 0; i < arraynum.length; i++){
        if(arraynum[i] < menorNúmero){
            menorNúmero = arraynum[i]
        }
    }


    




    res.innerHTML=`<br>O primeiro número digitado foi: ${arraynum[0]}<br>`
    res.innerHTML+=`<br>A quantia de números cadastrados foi: ${arraynum.length} <br>`
    res.innerHTML+=`<br>O menor valor é: ${menorNúmero}<br>`
    res.innerHTML+=`<br>Somando todos os valores, temos:${somar()}<br>`
    res.innerHTML+=`<br>A média dos valores digitados é:<br>`



    function somar() {
        let soma = 0
        for(let i in arraynum) {
          soma += arraynum[i]
        }
        return soma
      }




}








//MODELO//
var campo = document.querySelector("input")
var but = document.querySelector("button")
var dadosdocliente = [];

but.onclick = function(){
    dadosdocliente.push(campo.value);
    window.alert(dadosdocliente);
}
//FIM DO MODELO//




