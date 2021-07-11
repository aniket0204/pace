import { flky } from "./carousel.js";

// Sidebar

import { toggleNav } from "./navbar.js";

const navbar = document.querySelector(".navbar");
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger_menu");
const close = document.querySelectorAll(".close-nav");
hamburger.addEventListener("click", () => toggleNav(sidebar, close));

// Image Gallery Popup

import { popup } from "./img-gallery.js";
const items = document.querySelectorAll(".item");
items.forEach((item, idx) => {
  item.addEventListener("click", () => {
    popup(items, idx);
  });
});
