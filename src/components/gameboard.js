import { GameLoop } from "../controllers/gameLoop";
import { blockerComponent } from "./blocker";

export const gameBoardComponent = (() => {
  let myBoard = null;
  let myPlayer = null;

  const setUp = (player) => {
    myPlayer = player;
    myBoard = player.board;

    const gameBoard = document.createElement("div");
    gameBoard.classList.add("gameBoard");
    gameBoard.dataset.player = "" + player.number;

    let isShip = false;
    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        const element = myBoard.board[row][column];
        gameBoard.appendChild(createCell(row, column, element));
      }
    }

    gameBoard.appendChild(blockerComponent.setUp(myPlayer.isTurn));

    return gameBoard;
  };

  function createCell(row, column, element) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.row = row;
    cell.dataset.column = column;

    if (
      myPlayer.type !== "bot" &&
      typeof element === "object" &&
      !myPlayer.isTurn
    ) {
      cell.classList.add("ship");
    } else if (
      myPlayer.type !== "bot" &&
      typeof element === "object" &&
      myPlayer.isTurn
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
  }

  function attack(event) {
    const target = event.target;
    const enemy = target.parentNode.dataset.player;

    GameLoop.attack(enemy, target.dataset.row, target.dataset.column);
  }

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

  return { setUp, changeCellColor };
})();
