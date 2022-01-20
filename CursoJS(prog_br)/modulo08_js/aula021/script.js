//podemos colocar um objeto dentro de uma variável, e essa variável vai passar a ser um objeto: 

var a ={
    nome:"Marcelo", 
    telefone: 4002-8922
}


//segunda maneira de criar um objeto é através de uma function: 


function obj(n, s){
    return{
        nome:n, 
        sobrenome:s
    }
}


console.log(obj("Joao", "Pedro"));

//ou também:

var a = obj("Igor", "Oliveira");
console.log(a)


//terceira maneira:

function obj2 (n2, s2){
    this.nome = n2;
    this.sobrenome = s2; 
    
}
//essa função n retorna nada por si só, e preciso passar o new

var a2 = new obj2("Ratinho", "Bigode");

console.log(a2);
console.log(a2.nome); //ponto
console.log(a2["sobrenome"]);//colchetes


//duas formas de chamar: usando o ponto, ou passando o nome da propriedade entre colchetes