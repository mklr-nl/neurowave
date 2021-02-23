import "./index.scss";


const sections = document.querySelectorAll(".Info__boxes__box");
// const sectionOne = document.querySelector(".section4");

const box1 = sections[0];
const box2 = sections[1];
const box3 = sections[2];

const options = {
  root: null,
  threshold: 0.1,
  rootMargin: "0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle("inverse");
    observer.unobserve(entry.target);
    console.log(entry.target);
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
