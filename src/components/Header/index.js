import "./index.scss";

const burger = document.querySelector(".mobileMenu__open");
const mobileMenuOpen = document.querySelector(".mobileMenu__open");
const mobileMenuClose = document.querySelector(".mobileMenu__close");

const menuList = document.querySelector(".Menu__list");


mobileMenuOpen.addEventListener("click", function () {
    menuList.classList.add("active");
    setTimeout(function () {
        menuList.classList.add("menuDown")
        mobileMenuOpen.classList.add("notActive")
        mobileMenuClose.classList.add("active")
    }, 1)
})

mobileMenuClose.addEventListener("click", function () {
    menuList.classList.remove("menuDown")
    mobileMenuClose.classList.remove("active")
    mobileMenuOpen.classList.remove("notActive")
    setTimeout(function () {
        menuList.classList.remove("active");
    }, 100)
})