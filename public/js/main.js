// Carousel

import { slide } from "./carousel.js";

const prevBtns = document.querySelectorAll("#slide-left");
const nextBtns = document.querySelectorAll("#slide-right");

let activeSlide = 0;

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const carId = btn.parentElement.parentElement.id;
    activeSlide = slide(carId, "prev", activeSlide);
  });
});

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const carId = btn.parentElement.parentElement.id;
    activeSlide = slide(carId, "next", activeSlide);
  });
});

// Sidebar

import { toggleNav } from "./navbar.js";

const navbar = document.querySelector(".navbar");
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger_menu");
const close = document.querySelectorAll(".close-nav");
hamburger.addEventListener("click", () => toggleNav(sidebar, close));
