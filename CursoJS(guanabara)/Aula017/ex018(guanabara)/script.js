let num = document.getElementById('fnumero')
let quadro = document.getElementById('quadro')
let array = []






function Adicionar(){

    if(num.value <= 100 && num.value >= 1){
        window.alert('Tudo certo!')
        array.push(num.value)
        res.innerHTML = `<br>Os números adicionados foram: [${array}]<br>`
    
    if(array.indexOf(elementoDePesquisa, [pontoInicial = 0])){
        window.alert('O número já existe no array!')
    }
    
    
    }    
        
    
    else{
        window.alert('Número Inválido!')
       
    }
}










function Finalizar(){
    if (num.value == 0){
        alert('[ERRO] Campo vazio, digite algo!')
    }
    else{
        res.innerHTML+=`<br>O primeiro número digitado foi: ${array[0]}<br>`
        res.innerHTML+=`<br>O quantia de números cadastrados foram: ${array.length}<br>`
        res.innerHTML+=`<br>O menor valor<br> `
        res.innerHTML+=`<br>Somando todos os valores, temos:<br>`
        res.innerHTML+=`<br>A média dos valores é:<br>`
        
    }
    
       
}


