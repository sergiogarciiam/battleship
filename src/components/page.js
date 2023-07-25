import { finishMenuComponent } from "./finishMenu";
import { mainMenu } from "./mainMenu";
import { passDeviceMenu } from "./passDeviceMenu";

export const pageComponent = (() => {
  const setUp = () => {
    const page = document.createElement("div");
    page.classList.add("page");

    page.appendChild(mainMenu.setUp());
    page.appendChild(finishMenuComponent.setUp());
    page.appendChild(passDeviceMenu.setUp());

    return page;
  };

  return { setUp };
})();
