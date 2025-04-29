import e from "express";
import express from "express"


const app = express(); 
const PORT= 3031


//config
    //EJS 
        app.use("view engine", "ejs");
    //Body-parser
        app.use(express.urlencoded({extended:true}));
        app.use(express.json());
    //Public
        app.use(express.static("./src/public"));
    //Rotas


//rotas
app.get("/",(req,res)=>{
res.send("bem vindo ao servidor")
});
app.get("/books",(req,res)=>{
res.render("books")
});


app.listen(PORT,()=>{
    console.log("servidor ligado")
});

