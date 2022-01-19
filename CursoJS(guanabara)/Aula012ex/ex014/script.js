function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    
    msg.innerHTML = `Agora é ${hora} hora(s) e ${minuto} minutos `
    if (hora >= 0 && hora <= 12){
        //BOM DIA!
        img.src = 'data/manha.png'
        document.body.style.background =  '#ddb4ae'
        
    }
    else if (hora >= 12 && hora <= 18 ){
        //BOA TARDE!
        img.src = 'data/tarde.png'
        document.body.style.background = '#fe7f01'
      
    }
    else {
         //BOA NOITE!
        img.src = 'data/noite.png'
        document.body.style.background = '#453555'
       
    }

}
