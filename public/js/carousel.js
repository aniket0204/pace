const carouselSlide = document.querySelectorAll(".carousel-slide");
const imgWidth = carouselSlide[0].clientWidth;

const carouselTrack = document.querySelector(".carousel-track");

let activeSlide = 0;

const slide = (dir) => {
  if (dir === "prev") {
    if (activeSlide < carouselSlide.length - 1) {
      activeSlide++;
    } else {
      activeSlide = 0;
    }
  } else if (dir === "next") {
    if (activeSlide > 0) {
      activeSlide--;
    } else {
      activeSlide = carouselSlide.length - 1;
    }
  }
  carouselTrack.setAttribute(
    "style",
    `transition: 250ms ease-out; transform: translateX(-${
      activeSlide * imgWidth
    }px)`
  );
};

export { slide, call };
