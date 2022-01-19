function Calcular(){
    var tabuada = window.document.getElementById('txttabuada')

    
    if(tabuada.value.length == 0){
        window.alert('[ERRO] Digite um número!')
    }

    else{

        let t = Number(tabuada.value)

        res.innerHTML = ('Aqui está a atabuada:')

        for ( i = 0 ; i <= 10 ; i++){
            res.innerHTML += `<p>${t} x ${i}= ${i * t} <br></p>`   
        }

    }
     
}
