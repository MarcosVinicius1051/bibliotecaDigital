const dialog = document.querySelector("dialog");
const button = document.querySelector(".deleteBook");
const buttonNoDelete = document.querySelector(".noDeleteBook")

button.addEventListener("click", ()=>{
    dialog.showModal()
})

buttonNoDelete.addEventListener("click", ()=>{
    dialog.close()
})