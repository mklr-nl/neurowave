import "./index.scss";

const burger = document.querySelector(".Nav__burger__icon");
const extraMenu = document.querySelector(".Extra__menu");
const extraMenuBtn = document.querySelectorAll(".extraBtn");

let active = false;

burger.addEventListener("click", openExtraMenu);

function openExtraMenu() {
    extraMenu.classList.toggle("active");
    setTimeout(function(){
        extraMenu.classList.toggle("moveDown");
    })

    // setTimeout(function() {
    //     if (!active){
    //         for(let i=0; i<extraMenuBtn.length; i++){
    //         extraMenuBtn[i].style.opacity = 1;
    //         active = true;
    //         }
    //     } else {
    //         for(let i=0; i<extraMenuBtn.length; i++){
    //         extraMenuBtn[i].style.opacity = 0;
    //         active = false; 
    //         }
    //     }
    // },1)
}



// const menuBtn = document.querySelector(".menu-icon span");
// const searchBtn = document.querySelector(".search-icon");
// const cancelBtn = document.querySelector(".cancel-icon");
// const items = document.querySelector(".nav-items");
// const form = document.querySelector("form");

// menuBtn.onclick = () => {
//     items.classList.add("active");
//     menuBtn.classList.add("hide");
//     searchBtn.classList.add("hide");
//     cancelBtn.classList.add("show");
// }
// cancelBtn.onclick = () => {
//     items.classList.remove("active");
//     menuBtn.classList.remove("hide");
//     searchBtn.classList.remove("hide");
//     cancelBtn.classList.remove("show");
//     form.classList.remove("active");
//     cancelBtn.style.color = "#ff3d00";
// }
// searchBtn.onclick = () => {
//     form.classList.add("active");
//     searchBtn.classList.add("hide");
//     cancelBtn.classList.add("show");
// }