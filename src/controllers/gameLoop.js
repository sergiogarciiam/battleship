import { Player } from "../factories/player";
import { GameBoard } from "../factories/gameboard";

import { pageComponent } from "../components/page";
import { gameBoardComponent } from "../components/gameboard";
import { shipsChooseContainer } from "../components/shipsChoose";

export const GameLoop = (() => {
  let player1 = null;
  let player2 = null;

  const setUpMainMenu = () => {
    cleanNode(document.body);
    document.body.appendChild(pageComponent.setUp());
  };

  const setUpShipChoose = () => {
    const page = document.querySelector(".page");
    const mainMenu = document.querySelector(".main-menu");
    const gameBoards = document.querySelectorAll(".gameBoard");

    const gameBoard1 = new GameBoard();
    const gameBoard2 = new GameBoard();

    player1 = new Player(0, "human", gameBoard1);
    player2 = new Player(1, "bot", gameBoard2);
    player2.board.generateRandomBoard();

    if (gameBoards !== null)
      gameBoards.forEach((gameBoard) => gameBoard.remove());

    if (mainMenu !== null) mainMenu.remove();
    page.appendChild(shipsChooseContainer.setUp(player1));
  };

  const setUpGameBoards = () => {
    const page = document.querySelector(".page");
    const shipsChoose = document.querySelector(".ships-choose-container");

    shipsChoose.remove();

    page.appendChild(gameBoardComponent.setUp(player1));
    page.appendChild(gameBoardComponent.setUp(player2));
  };

  const attack = (row, column) => {
    gameBoardComponent.changeCellColor(
      player2.board.receiveAttack(row, column),
      player2.number,
      row,
      column
    );

    if (player2.board.isGameOver()) showFinishMenu();
    else attackBot();
  };

  function attackBot() {
    const aiCoord = player2.getCoordinates(player1.board.board);

    gameBoardComponent.changeCellColor(
      player1.board.receiveAttack(aiCoord[0], aiCoord[1]),
      player1.number,
      aiCoord[0],
      aiCoord[1]
    );

    if (player1.board.isGameOver()) showFinishMenu();
  }

  function showFinishMenu() {
    const finishMenu = document.querySelector(".finish-menu");
    const title = finishMenu.querySelector("h3");

    finishMenu.classList.remove("hide");
    title.textContent = "Game Over";
  }

  function cleanNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  return { setUpMainMenu, setUpShipChoose, setUpGameBoards, attack };
})();
