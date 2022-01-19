function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = window.document.getElementById('txtano')
    var resultado = window.document.querySelector('div#res')

    if (formularioano.value.length == 0 || Number(formularioano.value) > ano){
        window.alert('[ERRO!] Verifique se as informações do Ano estão corretas!')
    }
    else{
        var fsexo = window.document.getElementsByName('radsex')
        var idade = ano - Number(formularioano.value)
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsexo [0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <= 10){//CRIANÇA
                
                img.setAttribute('src', 'data/bbmenino.png')  
                
            }
            else if (idade <= 17){//JOVEM
                 
                img.setAttribute('src', 'data/adomenino.png') 
               
            }
            else if (idade <= 50){//ADULTO
                
                img.setAttribute('src','data/adultmenino.png') 
    
            }
            else { //IDOSO
               
                img.setAttribute('src','data/idosohomem.png') 
                
            }
        }

        else if (fsexo [1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade <= 10){ //CRIANÇA
                
                img.setAttribute('src','data/bbmenina.png') 
            }
            else if (idade <= 17){//JOVEM
                
                img.setAttribute('src','data/adomenina.png') 
                
            }
            else if (idade <= 50){//ADULTO
                
                img.setAttribute('src','data/adultmenina.png') 
                    
            }
            else { //IDOSO
                   
                img.setAttribute('src','data/idosomulher.png') 
                
            }
            }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.appendChild(img)
       
    }
}

