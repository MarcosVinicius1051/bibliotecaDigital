const form = [...document.querySelectorAll(".formBookData")];

form.map((bookForm) => {
  bookForm.addEventListener("click", () => {
    console.log(bookForm)
    bookForm.submit();
  });
});
