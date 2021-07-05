// Carousel

import { slide } from "./carousel.js";

const prevBtn = document.querySelector("#slide-left");
const nextBtn = document.querySelector("#slide-right");

nextBtn.addEventListener("click", () => {
  slide("prev");
});

prevBtn.addEventListener("click", () => {
  slide("next");
});

// Sidebar

import { toggleNav } from "./navbar.js";

const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger_menu");
const close = document.querySelectorAll(".close-nav");
hamburger.addEventListener("click", () => toggleNav(sidebar, close));
