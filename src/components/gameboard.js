import { GameLoop } from "../controllers/gameLoop";
import { blockerComponent } from "./blocker";

export const gameBoardComponent = (() => {
  let currentBoard = null;
  let currentPlayer = null;

  const setUp = (player) => {
    currentPlayer = player;
    currentBoard = player.board;

    const gameBoard = document.createElement("div");
    gameBoard.classList.add("gameBoard");
    gameBoard.dataset.player = "" + player.number;

    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        const element = currentBoard.board[row][column];
        gameBoard.appendChild(createCell(row, column, element));
      }
    }

    gameBoard.appendChild(blockerComponent.setUp(currentPlayer.isTurn));

    return gameBoard;
  };

  const changeCellColor = (isHit, number, row, column) => {
    const board = document.querySelector(`[data-player="${number}"]`);
    const cell = board.querySelector(
      `[data-row="${row}"][data-column="${column}"]`
    );

    if (isHit) {
      cell.classList.add("hit");
    } else {
      cell.classList.add("miss");
    }

    cell.removeEventListener("click", attack);
    cell.style.cursor = "default";
  };

  // PRIVATE FUNCTIONS
  const createCell = (row, column, element) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.row = row;
    cell.dataset.column = column;

    if (
      currentPlayer.type !== "bot" &&
      typeof element === "object" &&
      !currentPlayer.isTurn
    ) {
      cell.classList.add("ship");
    } else if (
      currentPlayer.type !== "bot" &&
      typeof element === "object" &&
      currentPlayer.isTurn
    ) {
      cell.classList.add("ship");
      cell.classList.add("color");
    }

    if (element === -1) {
      cell.classList.add("miss");
      cell.style.cursor = "default";
    } else if (element === 1) {
      cell.classList.add("hit");
      cell.style.cursor = "default";
    } else {
      cell.addEventListener("click", attack);
    }

    return cell;
  };

  const attack = (event) => {
    const target = event.target;
    const enemy = target.parentNode.dataset.player;
    GameLoop.attack(enemy, target.dataset.row, target.dataset.column);
  };

  return { setUp, changeCellColor };
})();
