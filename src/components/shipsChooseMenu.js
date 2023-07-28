import { GameLoop } from "../controllers/gameLoop";

export const shipsChooseMenu = (() => {
  let currentPlayer = null;
  let currentShip = "";
  let currentOrientation = "horizontal";

  const setUp = (player) => {
    currentPlayer = player;
    currentShip = "carrier";

    const shipsChooseMenu = document.createElement("main");
    shipsChooseMenu.classList.add("ships-choose-menu");

    shipsChooseMenu.appendChild(createButton());
    shipsChooseMenu.appendChild(createGameBoard());

    return shipsChooseMenu;
  };

  // PRIVATE FUNCTIONS
  const createButton = () => {
    const button = document.createElement("button");
    button.textContent = "Rotate";
    button.addEventListener("click", rotateShip);
    return button;
  };

  const createGameBoard = () => {
    const gameBoard = document.createElement("div");
    const playerBoard = currentPlayer.board.board;
    gameBoard.classList.add("gameBoard");

    for (let row = 0; row < 10; row++) {
      for (let column = 0; column < 10; column++) {
        const isShip = typeof playerBoard[row][column] === "object";
        gameBoard.appendChild(createCell(row, column, isShip));
      }
    }

    return gameBoard;
  };

  const createCell = (row, column, isShip) => {
    const cell = document.createElement("div");
    const shipPosition = document.createElement("div");

    cell.classList.add("cell");
    shipPosition.classList.add("ship-position");
    shipPosition.classList.add(currentOrientation);
    shipPosition.classList.add(currentShip);

    cell.dataset.row = row;
    cell.dataset.column = column;
    cell.addEventListener("click", addShip);

    cell.appendChild(shipPosition);

    if (isShip) {
      cell.classList.add("ship");
      cell.classList.add("color");
    }

    return cell;
  };

  const addShip = (e) => {
    const shipsChooseMenu = document.querySelector(".ships-choose-menu");
    const row = +e.target.parentNode.dataset.row;
    const column = +e.target.parentNode.dataset.column;

    const isPlaced = currentPlayer.board.placeShip(
      row,
      column,
      currentShip,
      currentOrientation === "horizontal"
    );

    if (!isPlaced) return;

    switch (currentShip) {
      case "carrier":
        currentShip = "battleship";
        break;
      case "battleship":
        currentShip = "cruiser";
        break;
      case "cruiser":
        currentShip = "submarine";
        break;
      case "submarine":
        currentShip = "destroyer";
        break;
      case "destroyer":
        currentShip = "";
        break;
    }

    if (currentShip === "") {
      GameLoop.setUpShipsChooseMenu(currentPlayer.number + 1);
      return;
    }

    shipsChooseMenu.childNodes[1].remove();
    shipsChooseMenu.appendChild(createGameBoard());
  };

  const rotateShip = () => {
    const shipsPosition = document.querySelectorAll(".ship-position");
    shipsPosition.forEach((ship) => {
      ship.classList.toggle("vertical");
      ship.classList.toggle("horizontal");
    });

    currentOrientation =
      currentOrientation === "horizontal" ? "vertical" : "horizontal";
  };

  return { setUp };
})();
