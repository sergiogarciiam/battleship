import { GameLoop } from "../controllers/gameLoop";
import { pageComponent } from "./page";

export const finishMenu = (() => {
  const setUp = () => {
    const finishMenu = document.createElement("div");
    const title = document.createElement("h3");
    const playAgainButton = document.createElement("button");
    const mainMenuButton = document.createElement("button");

    finishMenu.classList.add("finish-menu");
    finishMenu.classList.add("hide");

    title.textContent = "";
    playAgainButton.textContent = "Play Again";
    mainMenuButton.textContent = "Main Menu";

    playAgainButton.addEventListener("click", playAgain);
    mainMenuButton.addEventListener("click", goBackMainMenu);

    finishMenu.appendChild(title);
    finishMenu.appendChild(playAgainButton);
    finishMenu.appendChild(mainMenuButton);

    return finishMenu;
  };

  // PRIVATE FUNCTIONS
  const playAgain = (event) => {
    event.target.parentNode.classList.add("hide");
    GameLoop.resetPlayers();
    GameLoop.setUpShipsChooseMenu();
  };

  const goBackMainMenu = (event) => {
    event.target.parentNode.classList.add("hide");
    pageComponent.showMainMenu();
  };

  return { setUp };
})();
