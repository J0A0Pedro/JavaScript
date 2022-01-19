let num = [5, 8, 2, 9, 3]
//num[5] = 7 adiciona na posição desejada 
//num.push(19) adiciona automaticamente o número por último
//num.sort() coloca os números em ordem crescente

num.sort()
num.push(10) //o push tem q ficar abaixo do sort para ele ser ordenado. Se ele ficar em cima ele será adicionado dps da organização, assim sendo, ele será posto em primeiro independente do seu valor


console.log(num)
console.log(`Nosso vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
