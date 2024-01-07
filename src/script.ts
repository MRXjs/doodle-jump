document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid")!;
  const mrx = document.createElement("div");
  let isGameOver = false;
  let mrxLeftSpace = 50;
  let mrxBottomSpace = 50;

  function createDoodler() {
    mrx.classList.add("mrx");
    grid.appendChild(mrx);
  }
  createDoodler();
});
