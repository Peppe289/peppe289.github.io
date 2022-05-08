const navMenu = document.querySelector("#navMenu");
const navBar = document.querySelector("#navbar");
const sideBar = document.querySelector("#sidebar");

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navBar.classList.toggle("active");
    sideBar.classList.toggle("active");
});