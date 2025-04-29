import express from "express"
const app = express(); 
const PORT= 3031

app.get("/",(req,res)=>{
res.send("bem vindo ao servidor")
});

app.listen(PORT,()=>{
    console.log("servidor ligado")
});