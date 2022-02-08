

let usuarios = ["Adriana", "Marcia", "José"];

function inserirUsuario(nome){

    let promise = new Promise(function(resolve, reject){
       
        setTimeout(() => {
            usuarios.push(nome);

            let error = false;

            if(!error){
                resolve();
            }else{
                reject({msg:"Erro de qualquer coisa"});
            }  
        }, 1000);  
    })
    return promise;
}


function listarUsuarios(){
    console.log(usuarios);
}

//USando async await//

async function executar(){
    await inserirUsuario("Igor");
    listarUsuarios();
}

executar();



/*
inserirUsuario("Joao").then(listarUsuarios).catch((error) =>{
    console.log(error.msg);
} );
*/









