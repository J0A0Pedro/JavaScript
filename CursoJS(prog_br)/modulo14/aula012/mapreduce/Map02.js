//implementação do Map


const carrinho = [ 
    '{"nome": "Borracha", "preco": 3.45}', 
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'

]


//Retornar apenas os preços

const paraObjeto = json => JSON.parse(json) //mostra o os objetos

const apenasPreco = produto => produto.preco //mostra apenas o preco do objeto


const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)
//[ 3.45, 13.9, 41.22, 7.5 ]


