const addNewBookButton = document.querySelector(".addNewBookButton");
addNewBookButton.addEventListener("mouseenter", ()=>{
    addNewBookButton.src = "/assets/images/addHover.png"
})
addNewBookButton.addEventListener("mouseleave", ()=>{
    addNewBookButton.src = "/assets/images/add.png"
})