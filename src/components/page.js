import { finishMenuComponent } from "./finishMenu";
import { gameMenu } from "./gameMenu";
import { mainMenu } from "./mainMenu";
import { passDeviceMenu } from "./passDeviceMenu";
import { shipsChooseMenu } from "./shipsChooseMenu";
import { surrenderMenuComponent } from "./surrenderMenu";

export const pageComponent = (() => {
  let page = null;
  let title = null;

  const setUp = () => {
    page = document.createElement("div");
    title = document.createElement("h1");

    page.classList.add("page");
    title.classList.add("title");

    title.textContent = "Battleships";

    page.appendChild(title);
    page.appendChild(mainMenu.setUp());
    page.appendChild(finishMenuComponent.setUp());
    page.appendChild(surrenderMenuComponent.setUp());

    return page;
  };

  const showMainMenu = () => {
    const main = document.querySelector("main");

    title.textContent = "Battleships";
    main.remove();
    page.appendChild(mainMenu.setUp());
  };

  const showChooseShipsMenu = (player) => {
    const main = document.querySelector("main");

    title.textContent = `Player ${player.number + 1}: choose your ships`;
    main.remove();
    page.appendChild(shipsChooseMenu.setUp(player));
  };

  const showPassDeviceMenu = (player) => {
    const main = document.querySelector("main");

    title.textContent = "Pass the device";
    main.remove();
    page.appendChild(passDeviceMenu.setUp(player));
  };

  const showGameBoards = (players) => {
    let main = document.querySelector("main");
    main.remove();

    const playerTurn = players[0].isTurn
      ? players[0].number
      : players[1].number;

    title.textContent = `Player ${playerTurn + 1}: choose one cell`;

    page.appendChild(gameMenu.setUp(players));
  };

  const showSurrenderMenu = () => {
    const blockers = document.querySelectorAll(".blocker");
    const surrenderMenu = document.querySelector(".surrender-menu");

    blockers.forEach((blocker) => blocker.classList.remove("hide"));
    surrenderMenu.classList.remove("hide");
  };

  const showFinishMenu = () => {
    const finishMenu = document.querySelector(".finish-menu");
    const title = finishMenu.querySelector("h3");

    finishMenu.classList.remove("hide");
    title.textContent = "Game Over";
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
