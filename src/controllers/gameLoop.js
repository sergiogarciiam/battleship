import { Player } from "../factories/player";
import { GameBoard } from "../factories/gameboard";

import { pageComponent } from "../components/page";
import { gameBoardComponent } from "../components/gameboard";
import { shipsChooseMenu } from "../components/shipsChooseMenu";

export const GameLoop = (() => {
  let players = [];

  const setUpMainMenu = () => {
    cleanNode(document.body);
    document.body.appendChild(pageComponent.setUp());
  };

  const setUpPlayers = (typePlayer1, typePlayer2) => {
    const gameBoard1 = new GameBoard();
    const gameBoard2 = new GameBoard();

    players = [];

    players.push(new Player(0, typePlayer1, gameBoard1));
    players.push(new Player(1, typePlayer2, gameBoard2));
  };

  const setUpShipsChooseMenu = (number = 0) => {
    const page = document.querySelector(".page");
    const player = players[number];

    if (number === 2) setUpGameBoards();
    else if (player.type === "human") {
      cleanPage();
      page.appendChild(shipsChooseMenu.setUp(player));
    } else {
      player.board.generateRandomBoard();
      setUpGameBoards();
    }
  };

  const setUpGameBoards = () => {
    const page = document.querySelector(".page");
    const shipsChoose = document.querySelector(".ships-choose-menu");

    shipsChoose.remove();

    page.appendChild(gameBoardComponent.setUp(players[0]));
    page.appendChild(gameBoardComponent.setUp(players[1]));
  };

  const attack = (row, column) => {
    gameBoardComponent.changeCellColor(
      players[1].board.receiveAttack(row, column),
      players[1].number,
      row,
      column
    );

    if (players[1].board.isGameOver()) showFinishMenu();
    else attackBot();
  };

  function attackBot() {
    const aiCoord = players[1].getCoordinates(players[0].board.board);

    gameBoardComponent.changeCellColor(
      players[0].board.receiveAttack(aiCoord[0], aiCoord[1]),
      players[0].number,
      aiCoord[0],
      aiCoord[1]
    );

    if (players[0].board.isGameOver()) showFinishMenu();
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

  function cleanPage() {
    const mainMenu = document.querySelector(".main-menu");
    const gameBoards = document.querySelectorAll(".gameBoard");
    const shipsChoose = document.querySelector(".ships-choose-menu");

    if (shipsChoose !== null) shipsChoose.remove();
    if (gameBoards !== null)
      gameBoards.forEach((gameBoard) => gameBoard.remove());

    if (mainMenu !== null) mainMenu.remove();
  }

  return {
    setUpMainMenu,
    setUpPlayers,
    setUpShipsChooseMenu,
    setUpGameBoards,
    attack,
  };
})();
