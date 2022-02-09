let nome = "";


if(nome == ""){
    throw "O nome não pode ser vazio"
}
try{
    console.log(nome);
}catch(err) {
    console.log("Houve um erro", err)
}
    
console.log("Boa noite!"); 

