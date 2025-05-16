import mongoose, { mongo } from "mongoose";

import "dotenv/config";

mongoose.Promise = global.Promise;

//configurando o mongoose para o mongodb Atlas

    const db_password = process.env.DB_PASS;
    const db_user = process.env.DB_USER;
    const db_name = process.env.DB_NAME;

    mongoose.connect(`mongodb+srv://${db_user}:${db_password}@cluster0.aiebn3p.mongodb.net/${db_name}`).then(()=>{
        console.log("db mongodb funcionando")
    }).catch((err)=>{
        console.log("db mongodb error: "+err)
    })

export default mongoose; 

//sistema de conectar com o mongododb local
// mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://localhost/bancoLivros").then(()=>{
//     console.log("db mongodb funcionando")
// }).catch((err)=>{
//     console.log("db mongodb error: "+err)
// })

