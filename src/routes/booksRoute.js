//importar
    import express from "express"
    import BookModel from "../modules/book.js";
    import cloudinaryFun from "../controllers/upload.js";
    const router  = express.Router();

//Rotas
    router.get("/",(req,res)=>{
        res.render("books")
    });

    router.get("/addNewBook",(req,res)=>{
        res.render("newBook")
    });
    router.post("/newBookData", (req,res)=>{
    BookModel.find().lean().then((livros)=>{
        const novoLivro = {
            titulo: req.body.title,
            description: req.body.preface, 
            opinion: req.body.opinion,
            gradde: req.body.grade,
            favorite: false,
            bookImageLink: nada,
            bookId : livros.length
        }
        new BookModel(novoLivro).save().then(()=>{
            console.log("novo livro adicionado");
            res.redirect("/library/");
        }).cath((err)=>{
            console.log("error ao tentar adicionar um novo livro! "+ err)
        })
    })
    })

export default router; 