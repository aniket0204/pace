const toggleNav = (sidebar, close) => {
  sidebar.classList.add("show");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.classList.add("close-nav");
  document.body.appendChild(overlay);
  overlay.setAttribute(
    "style",
    "position: fixed; height: 100vh; width: 100%; top: 0; left: 0; background: rgba(0, 0, 0, 0.5); z-index: 100;"
  );
  const closeNav = (btn) => {
    btn.addEventListener("click", () => {
      sidebar.classList.remove("show");
      document.body.removeChild(overlay);
    });
  };
  close.forEach((btn) => {
    closeNav(btn);
  });
  overlay.addEventListener("click", closeNav(overlay));
};

export { toggleNav };
