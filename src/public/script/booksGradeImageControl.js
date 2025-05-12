const allBooks = document.querySelectorAll(".book")
const allGradesBooks = [...document.querySelectorAll(".gradeBookHome")];

let gradeImageObject = {
    0: "/assets/images/stars/starGrade0.png",
    1: "/assets/images/stars/starGrade1.png",
    2: "/assets/images/stars/starGrade2.png",
    3: "/assets/images/stars/starGrade3.png",
    4: "/assets/images/stars/starGrade4.png",
    5: "/assets/images/stars/starGrade5.png"
}


allGradesBooks.map(grade =>{
grade.src = gradeImageObject[grade.id]
})