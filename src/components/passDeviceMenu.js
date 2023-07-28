import { pageComponent } from "./page";

export const passDeviceMenu = (() => {
  let currentPlayer = null;

  const setUp = (player) => {
    currentPlayer = player;

    const passDeviceMenu = document.createElement("main");
    const button = document.createElement("button");

    passDeviceMenu.classList.add("pass-device-menu");

    button.textContent = "Next Turn";
    button.addEventListener("click", hidePassDeviceMenu);

    passDeviceMenu.appendChild(button);

    return passDeviceMenu;
  };

  const hidePassDeviceMenu = () => {
    if (Array.isArray(currentPlayer)) {
      pageComponent.showGameBoards(currentPlayer);
    } else {
      pageComponent.showChooseShipsMenu(currentPlayer);
    }
  };

  return { setUp };
})();
