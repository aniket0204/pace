const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  console.log("something is happening here as well");
};

export { scrollToTop };
