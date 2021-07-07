// const carousel = document.querySelectorAll(".carousel");
const slide = (carId, dir, activeSlide) => {
  const carousel = document.querySelector(`#${carId}`);
  const carouselTrack = carousel.querySelector(".carousel-track");
  const carouselSlide = carousel.querySelectorAll(".carousel-slide");
  const imgWidth = carouselSlide[0].clientWidth;

  if (dir === "next") {
    if (activeSlide < carouselSlide.length - 1) {
      activeSlide++;
    } else {
      activeSlide = 0;
    }
  } else if (dir === "prev") {
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
  return activeSlide;
};

export { slide };
