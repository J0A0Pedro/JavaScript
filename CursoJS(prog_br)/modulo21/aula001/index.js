const express = require("express");
const path = require("path");


const app = express();


app.use("/ms",express.static(path.join(__dirname, "../client")));

app.get("/", (req, res) => {
    // res.type("txt/plain");
    // res.set("Content-Type", "text/plain");
    res.send("<h1>Hello World do GET</h1>"); 
})

app.post("/", (req, res) => {
    res.send("<h1>Hello World do POST");
})

app.put("/", (req, res) => {
    res.send("<h1>Hello World do PUT</h1>")
})


app.delete("/", (req, res) => {
    res.send("<h1>Hello World do DELETE</h1>")
})

const PORT = 5000 

app.listen(PORT, () => {
    console.log(`Server rodando na porta: client ${PORT}`);
});