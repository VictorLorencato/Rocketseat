const express = require('express');
const app = express();

app.set("view engine", "ejs")

app.get("/", function (req,res){
    const items = [
        {
            title: "D",
            message: "esenvolver os bagulete"
        },
        {
            title: "E",
            message: "JS cria os trem em html"
        },
        {
            title: "M",
            message: "anjado de usar"
        },
        {
            title: "A",
            message: "doidado"
        },
        {
            title: "I",
            message: " doido"
        },
        {
            title: "S",
            message: "intaxe pica"
        }
    ]
    const subtitle = "Uma linguagem para criar HTML através de JS"
    res.render("pages/index", {qualitys: items, subtitle: subtitle});
})

app.get("/sobre", function (req,res){
    res.render("pages/about");
})

app.listen(8080);
console.log('Rodando');