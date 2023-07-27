import { gameBoardComponent } from "./gameboard";
import { pageComponent } from "./page";

export const gameMenu = (() => {
  const setUp = (players) => {
    const gameMenu = document.createElement("main");
    const gameBoardsContainer = document.createElement("div");
    const surrenderButton = document.createElement("button");

    gameMenu.classList.add("game-menu");
    gameBoardsContainer.classList.add("gameboards-container");

    surrenderButton.textContent = "Surrender";
    surrenderButton.addEventListener("click", pageComponent.showSurrenderMenu);

    gameBoardsContainer.appendChild(gameBoardComponent.setUp(players[0]));
    gameBoardsContainer.appendChild(gameBoardComponent.setUp(players[1]));

    gameMenu.appendChild(gameBoardsContainer);
    gameMenu.appendChild(surrenderButton);

    return gameMenu;
  };

  return { setUp };
})();
