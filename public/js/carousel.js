const carousel = document.querySelectorAll(".carousel");
carousel.forEach((el) => {
  const carouselTrack = el.querySelector(".carousel-track");
  const carouselSlide = el.querySelectorAll(".carousel-slide");
  const imgWidth = carouselSlide[0].clientWidth;
  const prevBtn = el.querySelector("#slide-left");
  const nextBtn = el.querySelector("#slide-right");

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
  nextBtn.addEventListener("click", () => {
    slide("prev");
  });

  prevBtn.addEventListener("click", () => {
    slide("next");
  });
});
