//é uma função q serve pra vc transformar um array, o parâmetro vai ser acumulado de chamada em chamada 

const alunos =[ {nome:'João', nota:7.3, bolsista:false},
{nome:'Maria', nota:9.2, bolsista:true},
{nome:'Pedro', nota:9.8, bolsista:false},
{nome:'Ana', nota:8.7, bolsista:true}
]

console.log(alunos.map(a => a.nota)) //retorna só as notas
//[ 7.3, 9.2, 9.8, 8.7 ]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) //aqui é onde vc coloca o valor inicial

//7.3 9.2
//16.5 9.8
//26.3 8.7
//Aqui ele recebeu 7.3 e 9.2 como valores iniciais por padrão, rodou o reduce e mostrou o acumulador que foi a soma dos dois valores anteriores que foi 7.3 + 9.2 = 16.5 e mostrou o valor atual que seria o próximo valor 9.8, rodou o reduce e pegou o acumulador anterior(16.5) junto ao atual(9.8) e somou, dando 26.3 que se tornou o novo acumulador e tbm mostrou o atual que seria 8.7, rodou reduce novamente e somou o acumulador anterior(26.3) junto ao atual(8.7) e no final ficou 35

console.log(resultado)
//35