const express = require("express");
const app = express();


app.get("/", function (re, res) {
    res.send("Seja bem-vindo ao meu app!")
});

app.get("/sobre", function (req, res) {
    res.send("Minha Página SOBRE")
});

app.get("/blog", function (req, res) {
    res.send("Bem-vindo ao meu blog")
});

app.get("/ola", function (req, res) {
    res.send("Ola")
});


//localhost:3000
app.listen(3000, function(){
    console.log("Servidor rondando na porta 3000")
});