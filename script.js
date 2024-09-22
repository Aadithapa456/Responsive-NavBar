let hamBurgerBtn = document.querySelector(".ham-burger");
let navItems = document.querySelector(".nav-ul");
hamBurgerBtn.addEventListener("click",()=>{
    navItems.classList.add("nav-visible");
})