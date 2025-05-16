import express from "express"
import router from "./src/routes/booksRoute.js";
import "dotenv/config";

const app = express(); 
const PORT= 3031;

//config
    //EJS 
        app.set("view engine", "ejs");
    //Body-parser
        app.use(express.urlencoded({extended:true}));
        app.use(express.json());
    //Public
        app.use(express.static("./src/public"));
    //Rotas
        app.use("/library",router);



app.listen(PORT,()=>{
    console.log("servidor ligado")
});

import mongoose from "./src/modules/db.js";


