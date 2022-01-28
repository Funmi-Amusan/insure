/* Navigation Control for Mobile */
const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('close-icon')
    nav.classList.toggle('nav-active')

})
