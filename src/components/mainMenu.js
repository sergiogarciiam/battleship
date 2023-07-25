import { GameLoop } from "../controllers/gameLoop";

export const mainMenu = (() => {
  let myPlayer1 = null;
  let myPlayer2 = null;
  let actualShip = "";
  let orientation = "";

  const setUp = (player1, player2) => {
    const mainMenu = document.createElement("div");
    mainMenu.classList.add("main-menu");

    myPlayer1 = player1;
    myPlayer2 = player2;

    actualShip = "carrier";
    orientation = "horizontal";

    mainMenu.appendChild(createButton());
    mainMenu.appendChild(createGameBoard());

    return mainMenu;
  };

  function createButton() {
    const button = document.createElement("button");
    button.textContent = "Rotate";
    button.addEventListener("click", rotateShip);
    return button;
  }

  function createGameBoard() {
    const gameBoard = document.createElement("div");
    const myBoard = myPlayer1.board.board;
    gameBoard.classList.add("main-menu__gameBoard");

    let isShip = false;
    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        if (typeof myBoard[row][column] == "object") isShip = true;
        gameBoard.appendChild(createCell(row, column, isShip));
        isShip = false;
      }
    }

    return gameBoard;
  }

  function createCell(row, column, isShip) {
    const cell = document.createElement("div");
    const shipPosition = document.createElement("div");

    cell.classList.add("cell");

    shipPosition.classList.add("ship-position");

    shipPosition.classList.add(orientation);
    shipPosition.classList.add(actualShip);

    cell.dataset.row = row;
    cell.dataset.column = column;

    cell.addEventListener("click", addShip);

    cell.appendChild(shipPosition);

    if (isShip) cell.classList.add("ship");

    return cell;
  }

  function addShip(e) {
    const mainMenu = document.querySelector(".main-menu");
    const row = +e.target.parentNode.dataset.row;
    const column = +e.target.parentNode.dataset.column;

    const isPlaced = myPlayer1.board.placeShip(
      row,
      column,
      actualShip,
      orientation === "horizontal"
    );

    if (!isPlaced) return;

    actualShip =
      actualShip === "carrier"
        ? "battleship"
        : actualShip === "battleship"
        ? "cruiser"
        : actualShip === "cruiser"
        ? "submarine"
        : actualShip === "submarine"
        ? "destroyer"
        : "";

    if (actualShip === "") {
      GameLoop.setUpNewGame();
      return;
    }

    mainMenu.childNodes[1].remove();
    mainMenu.appendChild(createGameBoard());
  }

  function rotateShip() {
    const shipsPosition = document.querySelectorAll(".ship-position");
    shipsPosition.forEach((ship) => {
      ship.classList.toggle("vertical");
      ship.classList.toggle("horizontal");
    });

    orientation = orientation === "horizontal" ? "vertical" : "horizontal";
  }

  return { setUp };
})();
