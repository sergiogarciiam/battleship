import { GameLoop } from "../controllers/gameLoop";

export const mainMenu = (() => {
  const setUp = () => {
    const mainMenu = document.createElement("div");
    const title = document.createElement("h1");
    const buttonsContainer = document.createElement("div");
    const singlePlayerButton = document.createElement("button");
    const multiPlayerButton = document.createElement("button");

    mainMenu.classList.add("main-menu");

    title.textContent = "Battleships";
    singlePlayerButton.textContent = "Human vs Bot";
    multiPlayerButton.textContent = "Human vs Human";

    singlePlayerButton.addEventListener("click", startSingleGame);
    multiPlayerButton.addEventListener("click", startMultiplayerGame);

    buttonsContainer.appendChild(singlePlayerButton);
    buttonsContainer.appendChild(multiPlayerButton);

    mainMenu.appendChild(title);
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
