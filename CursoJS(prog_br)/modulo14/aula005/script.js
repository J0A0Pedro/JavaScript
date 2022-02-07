

let usuarios = ["Adriana", "Marcia", "José"];

function inserirUsuario(nome, callback){
    setTimeout(() => {
        
        usuarios.push(nome);

        callback();
    
    }, 1000);
}

function listarUsuarios(){
    console.log(usuarios);
}


inserirUsuario("Joao", listarUsuarios);


































/*
function ola (){
    console.log("olá");
} 

function tchau(){
    console.log("tchau!");
}


function saudacao(s, nome, t){
s();
console.log(nome);
t()
}

saudacao(ola, "joao", tchau);

*/