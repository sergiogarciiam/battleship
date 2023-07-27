import { GameLoop } from "../controllers/gameLoop";

export const mainMenu = (() => {
  const setUp = () => {
    const mainMenu = document.createElement("main");
    const singlePlayerButton = document.createElement("button");
    const multiPlayerButton = document.createElement("button");

    mainMenu.classList.add("main-menu");

    singlePlayerButton.textContent = "Human vs Bot";
    multiPlayerButton.textContent = "Human vs Human";

    singlePlayerButton.addEventListener("click", startSingleGame);
    multiPlayerButton.addEventListener("click", startMultiplayerGame);

    mainMenu.appendChild(singlePlayerButton);
    mainMenu.appendChild(multiPlayerButton);
    mainMenu.appendChild(createLink());

    return mainMenu;
  };

  function createLink() {
    const link = document.createElement("a");

    link.textContent = "Sergio García";
    link.href = "https://github.com/sergiogarciiam";
    link.target = "__blank";

    return link;
  }

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
