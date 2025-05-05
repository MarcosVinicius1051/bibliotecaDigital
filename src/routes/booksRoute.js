import express from "express"
import BookModel from "../modules/book.js";
const router  = express.Router();

router.get("/",(req,res)=>{
    res.render("books")
});

// router.get("/books",(req,res)=>{
//     res.render("books")
// });
router.get("/addNewBook",(req,res)=>{
    res.render("newBook")
});
router.post("/newBookData", (req,res)=>{

})

export default router; 