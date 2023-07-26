import { finishMenuComponent } from "./finishMenu";
import { gameBoardComponent } from "./gameboard";
import { mainMenu } from "./mainMenu";
import { passDeviceMenu } from "./passDeviceMenu";
import { shipsChooseMenu } from "./shipsChooseMenu";

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
    const playerTurn = players[0].isTurn
      ? players[0].number
      : players[1].number;

    let main = document.querySelector("main");
    main.remove();

    title.textContent = `Player ${playerTurn + 1}: choose one cell`;

    main = document.createElement("main");
    main.appendChild(gameBoardComponent.setUp(players[0]));
    main.appendChild(gameBoardComponent.setUp(players[1]));

    page.appendChild(main);
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
    showFinishMenu,
  };
})();
