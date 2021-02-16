import "./index.scss";

const burgerOpen = document.querySelector(".Nav__burger__icon__open");
const burgerClose = document.querySelector(".Nav__burger__icon__close");
const mobMenu = document.querySelector(".Extra__menu");


burgerOpen.addEventListener("click", openMobMenu);
burgerClose.addEventListener("click", closeMobMenu);

function openMobMenu() {
    mobMenu.classList.add("active");
    burgerOpen.style.opacity = 0;
    setTimeout(function(){
        mobMenu.classList.add("moveDown100px");
        burgerOpen.classList.add("notActive")
        burgerClose.classList.remove("notActive")
        burgerClose.style.opacity = 1;
    }, 10)
}


function closeMobMenu() {
    mobMenu.classList.remove("moveDown100px");
    burgerClose.style.opacity = 0;
    setTimeout(function(){
    mobMenu.classList.remove("active");
    burgerOpen.classList.remove("notActive")
    burgerOpen.style.opacity = 1;
    burgerClose.classList.add("notActive")

    }, 10)
}
