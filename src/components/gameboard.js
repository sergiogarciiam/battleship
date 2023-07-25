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
        if (typeof myBoard.board[row][column] == "object") isShip = true;
        gameBoard.appendChild(createCell(row, column, isShip));
        isShip = false;
      }
    }

    gameBoard.appendChild(blockerComponent.setUp(player.number === 1));

    return gameBoard;
  };

  function createCell(row, column, isShip) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.row = row;
    cell.dataset.column = column;

    cell.addEventListener("click", attack);

    if (myPlayer.type !== "bot" && isShip && myPlayer.number === 1) {
      cell.classList.add("ship");
    } else if (myPlayer.type !== "bot" && isShip && myPlayer.number === 0) {
      cell.classList.add("ship");
      cell.classList.add("color");
    }
    return cell;
  }

  function attack(event) {
    const target = event.target;
    GameLoop.attack(
      target.parentNode.dataset.player,
      target.dataset.row,
      target.dataset.column
    );
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
