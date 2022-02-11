const alunos =[ {nome:'João', nota:7.3, bolsista:false}, //false
{nome:'Maria', nota:9.2, bolsista:true}, //true
{nome:'Pedro', nota:9.8, bolsista:false}, //false
{nome:'Ana', nota:8.7, bolsista:true} //true
]



//Desafio 1: Retornar true or false. Todos os alunos são bolsistas? 


const todosBolsistas = (resultado, bolsista) => resultado && bolsista 

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
//false


//Desafio2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
//true





//Tentei//




const temBolsa = NtemB => NtemB.bolsista == false

const bolsista = temBolsa => temBolsa.bolsista


const NaoBolsista = alunos.filter(temBolsa)
const Bolsista = alunos.filter(bolsista)


//console.log(alunos.map(temBolsa))

console.log(NaoBolsista)
//[ { nome: 'João', nota: 7.3, bolsista: false },
//{ nome: 'Pedro', nota: 9.8, bolsista: false } ]


console.log(Bolsista)
//[ { nome: 'Maria', nota: 9.2, bolsista: true },
//{ nome: 'Ana', nota: 8.7, bolsista: true } ]

// Resolução do professor//


