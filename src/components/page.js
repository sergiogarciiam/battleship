import { finishMenuComponent } from "./finishMenu";
import { mainMenu } from "./mainMenu";

export const pageComponent = (() => {
  const setUp = () => {
    const page = document.createElement("div");
    page.classList.add("page");

    page.appendChild(mainMenu.setUp());
    page.appendChild(finishMenuComponent.setUp());

    return page;
  };

  return { setUp };
})();
