export const mainMenu = (() => {
  let myPlayer1 = null;
  let myPlayer2 = null;
  let actualShip = "carrier";
  let isHorizontal = true;

  const setUp = (player1, player2) => {
    const mainMenu = document.createElement("div");
    mainMenu.classList.add("main-menu");

    myPlayer1 = player1;
    myPlayer2 = player2;

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
    const shipPosition = document.createElement("div");

    cell.classList.add("cell");

    shipPosition.classList.add("ship-position");
    shipPosition.classList.add("horizontal");
    shipPosition.classList.add(actualShip);

    cell.dataset.row = row;
    cell.dataset.column = column;

    cell.addEventListener("click", addShip);

    cell.appendChild(shipPosition);
    return cell;
  }

  function addShip(e) {
    const row = +e.target.parentNode.dataset.row;
    const column = +e.target.parentNode.dataset.column;

    const isPlaced = myPlayer1.board.placeShip(
      row,
      column,
      actualShip,
      isHorizontal
    );

    console.log(myPlayer1.board.board);

    if (isPlaced) placeShip(row, column);

    // if last --> setUpNewGame()
  }

  function placeShip(row, column) {
    const board = document.querySelector(".main-menu__gameBoard");
    let cell = null;

    if (isHorizontal) {
      const max = column + 5;

      for (let index = column; index < max; index++) {
        cell = board.querySelector(
          `[data-row="${row}"][data-column="${index}"]`
        );
        cell.classList.add("ship");
      }
    } else {
      const max = row + 5;

      for (let index = row; index < max; index++) {
        cell = board.querySelector(
          `[data-row="${index}"][data-column="${column}"]`
        );
        cell.classList.add("ship");
      }
    }
  }

  function rotateShip() {
    const shipsPosition = document.querySelectorAll(".ship-position");
    shipsPosition.forEach((ship) => {
      ship.classList.toggle("vertical");
      ship.classList.toggle("horizontal");
    });

    isHorizontal = isHorizontal ? false : true;
  }

  return { setUp };
})();
