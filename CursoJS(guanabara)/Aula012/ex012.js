var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são ${horas} horas e ${minutos} minutos`)

if (horas >= 1 && horas <=3){
    console.log('Boa madrugada!')
}
else if (horas <= 12){
    console.log('Bom dia!')
}
else if (horas > 12 && horas <18){
    console.log('Boa tarde!')
}
else if (horas <= 24){
    console.log('Boa noite!')
}
