import { GameLoop } from "../controllers/gameLoop";
import { mainMenu } from "./mainMenu";

export const finishMenuComponent = (() => {
  const setUp = (player) => {
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

  function playAgain(event) {
    event.target.parentNode.classList.add("hide");
    GameLoop.setUpShipsChooseMenu();
  }

  function goBackMainMenu(event) {
    event.target.parentNode.classList.add("hide");
    GameLoop.setUpMainMenu();
  }

  return { setUp };
})();
