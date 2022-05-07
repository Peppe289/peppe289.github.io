const navMenu = document.querySelector("#navMenu");
const sideBar = document.querySelector("#sidebar");

var isOpen = 0;

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    sideBar.classList.toggle("active");
/*
    if (isOpen == 0) {
        document.getElementById("sidebar").style.display = "block";
        isOpen = 1;
    } else {
        isOpen = 0;
        document.getElementById("sidebar").style.display = "none";
    } */
});