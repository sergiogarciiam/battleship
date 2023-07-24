import { GameLoop } from "../controllers/gameLoop";
import { blockerComponent } from "./blocker";

export const mainMenu = (() => {
  const setUp = () => {
    const mainMenu = document.createElement("div");
    mainMenu.classList.add("main-menu");

    mainMenu.appendChild(createGameBoard());

    return mainMenu;
  };

  function createGameBoard() {
    const gameBoard = document.createElement("div");
    gameBoard.classList.add("main-menu__gameBoard");

    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        gameBoard.appendChild(createCell(row, column));
      }
    }

    return gameBoard;
  }

  function createCell(row, column) {
    const cell = document.createElement("div");
    const ship = document.createElement("div");

    cell.classList.add("cell");
    ship.classList.add("carrier");

    cell.dataset.row = row;
    cell.dataset.column = column;

    cell.addEventListener("click", addShip);

    cell.appendChild(ship);
    return cell;
  }

  return { setUp };
})();
