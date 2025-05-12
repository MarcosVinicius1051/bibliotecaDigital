//importar
import express from "express";
import BookModel from "../modules/book.js";
import cloudinaryFun from "../controllers/upload.js";
import formidable from "formidable";
const router = express.Router();

//Rotas
router.get("/", (req, res) => {

  BookModel.find().lean().then((booksData)=>{
    console.log(booksData)
    res.render("books", {booksRender: booksData})
  }).catch((err)=>{
    console.log("algo deu errado ao tentar renderizar os livros: "+err)
  })

});

router.get("/addNewBook", (req, res) => {
  res.render("newBook");
});

// Salvar Ddados
router.post("/upload", (req, res) => {

  const form = formidable({
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Erro ao processar o formulário:", err);
      return res.status(500).send("Erro ao processar o formulário");
    }
    try {

      if (Object.keys(files).length == 0) {
        return res.status(400).send("Nenhum arquivo enviado");
      } else {
        console.log("arquivo existe: " + Object.keys(files));
      }

      const fileFielName = Object.keys(files)[0]; // files é um objeto que possui o fileImage por isso o [0]
      // console.log(files[fileFielName][0].filepath); ===>  o fileImage é um objeto, por isso o [0] dnv
      const imagePath = files[fileFielName][0].filepath; // variavel com o caminho do arquivo;
      
      const gradeBook = parseInt(fields.grade); // pega o valor da nota dada

      BookModel.find().lean().then(async (livros)=>{
        const novoLivro = {
          titulo: fields.title[0],
          description:fields.preface[0],
          opinion:fields.opinion[0],
          grade: gradeBook,
          favorite:false,
          bookImageLink:await cloudinaryFun(imagePath),
          bookId:livros.length
        }
        new BookModel(novoLivro).save().then(()=>{
          console.log("novo livro cadastrado");
          res.redirect("/library")
        }).catch((err)=>{
          console.log("erro cadastro livro: "+err);
        })
      }).catch((err)=>{
        console.log("um erro ocorreu ao tentar cadastrar um novo livro: "+err)
      })

    } catch (error) {
      console.log("algo deu errado ao tentar fazer o upload " + error);
    }
  });
});


export default router;
