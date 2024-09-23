let hamBurgerBtn = document.querySelector(".ham-burger");
let navUl = document.querySelector(".nav-ul");
let equals = document.querySelector(".equals");
hamBurgerBtn.addEventListener("click", () => {
   navUl.classList.toggle("nav-visible");
   equals.classList.toggle("active");
});
