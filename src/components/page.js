import { finishMenuComponent } from "./finishMenu";
import { gameBoardComponent } from "./gameboard";
import { mainMenu } from "./mainMenu";

export const pageComponent = (() => {
  const setUp = (player1, player2) => {
    const page = document.createElement("div");
    page.classList.add("page");

    page.appendChild(mainMenu.setUp());
    //page.appendChild(gameBoardComponent.setUp(player1));
    //page.appendChild(gameBoardComponent.setUp(player2));
    page.appendChild(finishMenuComponent.setUp());

    return page;
  };

  return { setUp };
})();
