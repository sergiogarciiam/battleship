import { finishMenuComponent } from "./finishMenu";

export const passDeviceMenu = (() => {
  const setUp = () => {
    const passDeviceMenu = document.createElement("div");
    const button = document.createElement("button");

    passDeviceMenu.classList.add("pass-device-menu");
    passDeviceMenu.classList.add("hide");

    button.textContent = "Passed";
    button.addEventListener("click", hidePassDeviceMenu);

    passDeviceMenu.appendChild(button);

    return passDeviceMenu;
  };

  function hidePassDeviceMenu() {
    const passDeviceMenu = document.querySelector(".pass-device-menu");
    passDeviceMenu.classList.add("hide");
  }

  return { setUp };
})();
