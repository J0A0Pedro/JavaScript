function Contar() {
    var ini = window.document.getElementById('txtinicio') //Tbm dá pra usar o let ao invés de var, mas eu preferi esse aqui
    var fim = window.document.getElementById('txtfinal')
    var passo = window.document.getElementById('txtpasso')

    if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Dados Inváilidos!')
        resultado.innerHTML = 'Impossível contar'
    } 
    else {
        resultado.innerHTML = ' Contando : <br>'
        let i = Number(ini.value) 
        let f = Number(fim.value)
        let p = Number(passo.value)
        

        if ( p <= 0){
            window.alert('Passo inválido! Considerando passo = 1')
            p = 1
        }
        

        if ( i < f){  //Se o número inicial for maior q o final é contagem crescente:
            for ( let c = i ; c <= f ; c += p ){
                resultado.innerHTML += ` ${c} \u{27a1}`
            }

        }
        else{ //Se o número final for maior q o inicial é contagem regressiva:
            for ( let c = i ; c >= f ; c -= p){
                resultado.innerHTML += ` ${c} \u{27a1} `
            }
        }

        resultado.innerHTML += `\u{1f3c1}`
    }
}










/*
function Contar(){
   let inicio = window.document.getElementById('txtinicio')
   let fim = window.document.getElementById('txtfinal')
   let passo = window.document.getElementById('txtpasso')

   if ( inicio.value.lenght == 0 || fim.value.length == 0 || passo.value.lenght == 0 ){
       window.alert('[ERRO! DADOS INVÁLIDOS!]')
   }
   else{
       resultado.innerHTML = 'Contando : '
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p =  Number(passo.value)

       for ( let c = i ; c <= f; c += p ){
           resultado.innerHTML += ` ${c} `
       }
   }
}
*/