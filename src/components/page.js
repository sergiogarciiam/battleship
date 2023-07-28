import { finishMenu } from "./finishMenu";
import { gameMenu } from "./gameMenu";
import { mainMenu } from "./mainMenu";
import { passDeviceMenu } from "./passDeviceMenu";
import { shipsChooseMenu } from "./shipsChooseMenu";
import { surrenderMenu } from "./surrenderMenu";

export const pageComponent = (() => {
  let pageElement = null;
  let titleElement = null;

  const setUp = () => {
    createPageElement();
    pageElement.appendChild(mainMenu.setUp());
    pageElement.appendChild(finishMenu.setUp());
    pageElement.appendChild(surrenderMenu.setUp());

    return pageElement;
  };

  const showMainMenu = () => {
    removePreviousContent();
    titleElement.textContent = "Battleships";
    pageElement.appendChild(mainMenu.setUp());
  };

  const showChooseShipsMenu = (player) => {
    removePreviousContent();
    titleElement.textContent = `Player ${player.number + 1}: choose your ships`;
    pageElement.appendChild(shipsChooseMenu.setUp(player));
  };

  const showPassDeviceMenu = (player) => {
    removePreviousContent();
    titleElement.textContent = "Pass the device";
    pageElement.appendChild(passDeviceMenu.setUp(player));
  };

  const showGameBoards = (players) => {
    removePreviousContent();
    const playerTurn = players[0].isTurn
      ? players[0].number
      : players[1].number;
    titleElement.textContent = `Player ${playerTurn + 1}: choose one cell`;
    pageElement.appendChild(gameMenu.setUp(players));
  };

  const showSurrenderMenu = () => {
    const surrenderMenu = document.querySelector(".surrender-menu");
    surrenderMenu.classList.remove("hide");
  };

  const showFinishMenu = (winnerNumber) => {
    const finishMenu = document.querySelector(".finish-menu");
    const title = finishMenu.querySelector("h3");

    finishMenu.classList.remove("hide");
    title.textContent = `Player ${winnerNumber + 1} won!`;
  };

  // PRIVATE FUNCTIONS
  const createPageElement = () => {
    pageElement = document.createElement("div");
    pageElement.classList.add("page");

    titleElement = document.createElement("h1");
    titleElement.classList.add("title");
    titleElement.textContent = "Battleships";

    pageElement.appendChild(titleElement);
    return pageElement;
  };

  const removePreviousContent = () => {
    const mainElement = document.querySelector("main");
    mainElement.remove();
  };

  return {
    setUp,
    showMainMenu,
    showChooseShipsMenu,
    showPassDeviceMenu,
    showGameBoards,
    showSurrenderMenu,
    showFinishMenu,
  };
})();
