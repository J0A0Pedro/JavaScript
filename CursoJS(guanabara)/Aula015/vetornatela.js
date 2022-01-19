let num = [4, 5, 6, 7, 8] //É a msm coisa, mas é mais simplificado
console.log(num)
for(let pos in num){
    num.sort()
    console.log(`Posição: ${pos} Valor: ${num[pos]}`)
}

let posição = num.indexOf(6)
if(posição == -1){
    console.log('O valor não foi encontrado.')
}
else{
    console.log(`O valor 6 está na posição ${posição}`)
}





/*
let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

for(let pos= 0 ; pos <= valores.length ; pos++){
    //valores.sort()
    console.log(`A posição ${pos} tem o valor : ${valores[pos]}`)
    
}
*/