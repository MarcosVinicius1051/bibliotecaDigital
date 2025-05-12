const gradeStarsImage = document.querySelector(".gradeStarsImage");
const gradeNote = document.querySelector("#grade");

let gradeImageObject = {
    0: "/assets/images/stars/starGrade0.png",
    1: "/assets/images/stars/starGrade1.png",
    2: "/assets/images/stars/starGrade2.png",
    3: "/assets/images/stars/starGrade3.png",
    4: "/assets/images/stars/starGrade4.png",
    5: "/assets/images/stars/starGrade5.png"
}

gradeNote.addEventListener("click", ()=>{
    let gradeValue = parseInt(gradeNote.value);
    gradeStarsImage.src = gradeImageObject[gradeValue]
})