import { GameLoop } from "../controllers/gameLoop";

export const mainMenu = (() => {
  const setUp = () => {
    const mainMenu = document.createElement("main");
    const buttonsContainer = document.createElement("div");
    const singlePlayerButton = document.createElement("button");
    const multiPlayerButton = document.createElement("button");

    mainMenu.classList.add("main-menu");
    buttonsContainer.classList.add("main-menu__buttons-container");

    singlePlayerButton.textContent = "Human vs Bot";
    multiPlayerButton.textContent = "Human vs Human";

    singlePlayerButton.addEventListener("click", startSingleGame);
    multiPlayerButton.addEventListener("click", startMultiplayerGame);

    buttonsContainer.appendChild(singlePlayerButton);
    buttonsContainer.appendChild(multiPlayerButton);

    mainMenu.appendChild(buttonsContainer);

    return mainMenu;
  };

  function startSingleGame() {
    GameLoop.setUpPlayers("human", "bot");
    GameLoop.setUpShipsChooseMenu();
  }

  function startMultiplayerGame() {
    GameLoop.setUpPlayers("human", "human");
    GameLoop.setUpShipsChooseMenu();
  }

  return { setUp };
})();
