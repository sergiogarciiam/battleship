import { Player } from "../factories/player";
import { GameBoard } from "../factories/gameboard";

import { pageComponent } from "../components/page";
import { gameBoardComponent } from "../components/gameboard";

export const GameLoop = (() => {
  let players = [];

  const setUp = () => {
    document.body.appendChild(pageComponent.setUp());
  };

  const setUpPlayers = (typePlayer1, typePlayer2) => {
    players = [];
    players.push(new Player(0, typePlayer1, new GameBoard(), true));
    players.push(new Player(1, typePlayer2, new GameBoard(), false));
  };

  const resetPlayers = () => {
    players[0].board = new GameBoard();
    players[1].board = new GameBoard();
  };

  const setUpShipsChooseMenu = (number = 0) => {
    const player = players[number];

    if (number === 2) {
      pageComponent.showGameBoards(players);
      return;
    }

    if (player.type === "human") {
      pageComponent.showPassDeviceMenu(player);
    } else {
      player.board.generateRandomBoard();
      pageComponent.showGameBoards(players);
    }
  };

  const attack = (enemy, row, column) => {
    gameBoardComponent.changeCellColor(
      players[enemy].board.receiveAttack(row, column),
      players[enemy].number,
      row,
      column
    );

    if (players[enemy].board.isGameOver()) endGame();

    if (players[1].type === "human") {
      const board = document.querySelector(`[data-player="${enemy}"]`);
      const blocker = board.querySelector(".blocker");
      blocker.classList.remove("hide");

      players[0].isTurn = players[0].isTurn ? false : true;
      players[1].isTurn = players[1].isTurn ? false : true;

      setTimeout(() => pageComponent.showPassDeviceMenu(players), 800);
    } else {
      attackBot();
    }
  };

  function attackBot() {
    const aiCoord = players[1].getCoordinates(players[0].board.board);

    gameBoardComponent.changeCellColor(
      players[0].board.receiveAttack(aiCoord[0], aiCoord[1]),
      players[0].number,
      aiCoord[0],
      aiCoord[1]
    );

    if (players[0].board.isGameOver()) endGame();
  }

  function endGame() {
    const blockers = document.querySelectorAll(".blocker");
    blockers.forEach((blocker) => blocker.classList.remove("hide"));
    pageComponent.showFinishMenu();
  }

  return {
    setUp,
    setUpPlayers,
    resetPlayers,
    setUpShipsChooseMenu,
    attack,
  };
})();
