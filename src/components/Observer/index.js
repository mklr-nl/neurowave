import "./index.scss";


const sectionOne = document.querySelector(".section1");
const sections = document.querySelectorAll(".Section");

const options = {
    root: null,
    treshhold: 0,
    rootMargin: "0px" 
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry.target);
        
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
})
// observer.observe(sectionOne);