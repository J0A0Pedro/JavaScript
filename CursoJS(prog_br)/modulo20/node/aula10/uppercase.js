let fs = require("fs");

let args = process.argv.slice(2);

let fileName = args[0];

//Eu quero ler esse arquivo e colocar tudo que tiver nele em letras maiúsculas em um outro arquivo

fs.readFile(fileName, "UTF8", (err, data) => {
    if(err) throw err;
    
    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (err)=>{
        if(err){
            throw err;
        }
        console.log("Arquivo gerado com sucesso! ")
    })
})