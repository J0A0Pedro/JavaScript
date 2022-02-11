//a função map serve pra fazer uma transformação no array, etão a ideia é mapear um array pra um outro array do mesmo tamanho, só que com os dados transformados. O map serve para transformar um array em outro, e a regra é se o array original tem 6 elementos o resultado do map vai gerar um array com 6 elementos só q com os dados transformados. O array original tem tamanho x e o array final vai ter o mesmo tamanho x 


const nums = [1, 2, 3, 4, 5]

//Map é um For com propósito


let resultado = nums.map(function(numeros){
    return numeros * 2
})

console.log(resultado)
//[ 2, 4, 6, 8, 10 ]


//O map n transforma o array atual, ele gera um novo array sem modificar o original
console.log(nums, resultado)
//[ 1, 2, 3, 4, 5 ] [ 2, 4, 6, 8, 10 ]

const somaDez = nums.map(function(elemento2){
    return elemento2 + 10
})
console.log(somaDez)
//[ 11, 12, 13, 14, 15 ]


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado2)
//[ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]