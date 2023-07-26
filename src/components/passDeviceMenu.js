import { pageComponent } from "./page";

export const passDeviceMenu = (() => {
  let myPlayer = null;

  const setUp = (player) => {
    myPlayer = player;

    const passDeviceMenu = document.createElement("main");
    const button = document.createElement("button");

    passDeviceMenu.classList.add("pass-device-menu");

    button.textContent = "Next Turn";
    button.addEventListener("click", hidePassDeviceMenu);

    passDeviceMenu.appendChild(button);

    return passDeviceMenu;
  };

  function hidePassDeviceMenu() {
    if (!Array.isArray(myPlayer)) pageComponent.showChooseShipsMenu(myPlayer);
    else pageComponent.showGameBoards(myPlayer);
  }

  return { setUp };
})();
