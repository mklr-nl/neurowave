import { on } from "delegated-events";
import "./index.scss";

const burgerOpen = document.querySelector(".Nav__burger__icon__open");
const burgerClose = document.querySelector(".Nav__burger__icon__close");
const mobMenu = document.querySelector(".Extra__menu");


function moveMenu() {
    mobMenu.classList.toggle("moveDown100px");
    burgerOpen.classList.toggle("notActive");
    burgerClose.classList.toggle("notActive")
}

on("click", ".Nav__burger__icon", function(event){
    moveMenu()
})
