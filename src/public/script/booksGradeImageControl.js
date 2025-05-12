let gradeImageObject = {
    0: "/assets/images/stars/starGrade0.png",
    1: "/assets/images/stars/starGrade1.png",
    2: "/assets/images/stars/starGrade2.png",
    3: "/assets/images/stars/starGrade3.png",
    4: "/assets/images/stars/starGrade4.png",
    5: "/assets/images/stars/starGrade5.png"
}

if(document.querySelectorAll(".book")){
    gradeBooksHome()
}

if(document.querySelector(".bookCover")){
    console.log("ola mundo")
    gradeBookSelected()
}

function gradeBooksHome(){
    const allGradesBooks = [...document.querySelectorAll(".gradeBookHome")];

    allGradesBooks.map(grade =>{
    grade.src = gradeImageObject[grade.id]
})
}


function gradeBookSelected(){
    const gradeBook = document.querySelector(".bookGradeImage")
    gradeBook.src = gradeImageObject[gradeBook.id]
}