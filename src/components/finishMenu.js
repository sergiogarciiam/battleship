import { GameLoop } from "../controllers/gameLoop";

export const finishMenuComponent = (() => {
  const setUp = (player) => {
    const finishMenu = document.createElement("div");
    const title = document.createElement("h3");
    const button = document.createElement("button");

    finishMenu.classList.add("finish-menu");
    finishMenu.classList.add("hide");

    title.textContent = "";
    button.textContent = "Play Again";

    button.addEventListener("click", playAgain);

    finishMenu.appendChild(title);
    finishMenu.appendChild(button);

    return finishMenu;
  };

  function playAgain(event) {
    event.target.parentNode.classList.add("hide");
    GameLoop.setUpMainMenu();
  }

  return { setUp };
})();
