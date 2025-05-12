
const divFileUpdate = document.querySelector(".fileUpdate");
const inputFile = document.querySelector("#upadteImage");


inputFile.addEventListener("change",(evt)=>{

    let reader = new FileReader();

    reader.onload = ()=>{
       divFileUpdate.style.backgroundImage = `url(${reader.result})`;
    }

    reader.readAsDataURL(inputFile.files[0])
})