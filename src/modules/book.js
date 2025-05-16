
import mongoose from "./db.js";

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
    opinion:{
        type:String,
        required:true
    },
    grade: {
        type: Number, 
        required:true
    },
    favorite: {
        type:Boolean,
    },
    bookImageLink:{
        type:String,
        required:true
    },
    bookId:{
        type:Number,
        required: true
    }
})

const BookModel = mongoose.model("books",livroModel);

export default BookModel;