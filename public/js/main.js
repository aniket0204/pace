import { slide, call } from "./carousel.js";

const prevBtn = document.querySelector("#slide-left");
const nextBtn = document.querySelector("#slide-right");

nextBtn.addEventListener("click", () => {
  slide("prev");
});

prevBtn.addEventListener("click", () => {
  slide("next");
});
