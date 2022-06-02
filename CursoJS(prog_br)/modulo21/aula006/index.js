var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//para qualquer tipo de chamada nesse caminho eu quero imprimir qual é o corpo da minha requisição
let consoleBody = (req, res, next) => {
    console.log(req.body);
    next(); 
}
 
let helloWorld = (req, res) => {
    res.send("Hello World!!!!")
}
// app.get("/", consoleMethod, helloWorld);
// app.post("/", consoleMethod, helloWorld);
//separamos eles: 

app.use("/", bodyParser.json())
app.use("/", consoleBody);
app.get("/", helloWorld);
app.post("/", helloWorld)



app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
