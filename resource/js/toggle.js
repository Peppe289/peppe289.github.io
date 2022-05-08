const navMenu = document.querySelector("#navMenu");
const sideBar = document.querySelector("#sidebar");

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    sideBar.classList.toggle("active");
});