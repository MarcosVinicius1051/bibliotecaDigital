import mongoose, { mongo } from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bancoLivros").then(()=>{
    console.log("db mongodb funcionando")
}).catch((err)=>{
    console.log("db mongodb error: "+err)
})

export default mongoose; 