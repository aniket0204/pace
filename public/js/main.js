import { flky } from "./carousel.js";

// Sidebar

import { toggleNav } from "./navbar.js";

const navbar = document.querySelector(".navbar");
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger_menu");
const close = document.querySelectorAll(".close-nav");
hamburger.addEventListener("click", () => toggleNav(sidebar, close));

// Image Gallery
$(document).ready(function () {
  $(".popup-gallery").magnificPopup({
    type: "image",
    delegate: "a",
    gallery: {
      enabled: true,
    },
  });
});
