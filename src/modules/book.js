import { stringify } from "querystring";
import mongoose from "./db.js";
import { type } from "os";
import { deflate } from "zlib";

const Schema = mongoose.Schema; 

//Model de livro
const livroModel = Schema({
    titulo: {
        type: String,
        required:true
    },
    description:{
        type: String, 
        required: true
    },
    opnion:{
        type:String,
        required:true
    },
    gradde: {
        type: Number, 
        required:true
    },
    favorite: {
        type:Boolean,
    }
})

const BookModel = mongoose.model("books",livroModel);
export default BookModel;