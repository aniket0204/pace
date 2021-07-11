const popup = (items, i) => {
  const bigImg = document.createElement("div");
  bigImg.classList.add("big-img-container");
  bigImg.innerHTML = `
    <img class="big-img" src="${
      items[i].querySelector("img").src
    }" style="width: 100%;">
  `;
  bigImg.setAttribute(
    "style",
    "position: absolute; top: 0; left: 0; height: 100vh; width: 100%;"
  );
  document.body.appendChild(bigImg);
};

export { popup };
