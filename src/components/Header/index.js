import { on } from "delegated-events";
import "./index.scss";

const burgerOpen = document.querySelector(".Nav__burger__icon__open");
const burgerClose = document.querySelector(".Nav__burger__icon__close");
const mobMenu = document.querySelector(".Extra__menu");

//! for the intro part image opacity to 50%
const introImg = document.querySelector(".Intro__mob__img");


function moveMenu() {
    mobMenu.classList.toggle("moveDown100px");
    burgerOpen.classList.toggle("notActive");
    burgerClose.classList.toggle("notActive");
    //! for the intro part image opacity to 50%
    introImg.classList.toggle("opacity50");
}

on("click", ".Nav__burger__icon", function(event){
    moveMenu()
})
