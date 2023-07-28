import { Player } from "../factories/player";
import { GameBoard } from "../factories/gameboard";
import { pageComponent } from "../components/page";
import { gameBoardComponent } from "../components/gameboard";

export const GameLoop = (() => {
  let players = [];

  const setUp = () => {
    document.body.appendChild(pageComponent.setUp());
  };

  const initializePlayers = (typePlayer1, typePlayer2) => {
    players = [
      new Player(0, typePlayer1, new GameBoard(), true),
      new Player(1, typePlayer2, new GameBoard(), false),
    ];
  };

  const resetPlayers = () => {
    players.forEach((player) => (player.board = new GameBoard()));
  };

  const setUpShipsChooseMenu = (currentPlayerNumber = 0) => {
    const currentPlayer = players[currentPlayerNumber];

    if (currentPlayerNumber === 2) {
      pageComponent.showGameBoards(players);
    } else if (currentPlayerNumber === 0) {
      pageComponent.showChooseShipsMenu(currentPlayer);
    } else if (currentPlayer.type === "human") {
      pageComponent.showPassDeviceMenu(currentPlayer);
    } else {
      currentPlayer.board.generateRandomBoard();
      pageComponent.showGameBoards(players);
    }
  };

  const attack = (enemy, row, column) => {
    const attackedPlayer = players[enemy];
    const isHit = attackedPlayer.board.receiveAttack(row, column);

    gameBoardComponent.changeCellColor(
      isHit,
      attackedPlayer.number,
      row,
      column
    );

    if (attackedPlayer.board.isGameOver()) endGame(attackedPlayer.number);
    else nextTurn(enemy);
  };

  // PRIVATE FUNCTIONS
  const nextTurn = (enemy) => {
    if (players[1].type === "human") {
      const board = document.querySelector(`[data-player="${enemy}"]`);
      const blocker = board.querySelector(".blocker");
      const surrenderMenu = document.querySelector(".surrender-menu");

      blocker.classList.remove("hide");
      surrenderMenu.classList.add("hide");

      players[0].isTurn = !players[0].isTurn;
      players[1].isTurn = !players[1].isTurn;
      setTimeout(() => pageComponent.showPassDeviceMenu(players), 800);
    } else {
      attackBot();
    }
  };

  const attackBot = () => {
    const aiCoord = players[1].getCoordinates(players[0].board.board);
    const isHit = players[0].board.receiveAttack(aiCoord[0], aiCoord[1]);

    gameBoardComponent.changeCellColor(
      isHit,
      players[0].number,
      aiCoord[0],
      aiCoord[1]
    );

    if (players[0].board.isGameOver()) endGame(0); // because the looser in player, always 0
  };

  const endGame = (looserNumber) => {
    const blockers = document.querySelectorAll(".blocker");
    const winnerNumber = looserNumber === 0 ? 1 : 0;

    blockers.forEach((blocker) => blocker.classList.remove("hide"));
    pageComponent.showFinishMenu(winnerNumber);
  };

  return {
    setUp,
    initializePlayers,
    resetPlayers,
    setUpShipsChooseMenu,
    attack,
  };
})();
