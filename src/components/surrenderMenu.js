import { pageComponent } from "./page";

export const surrenderMenu = (() => {
  const setUp = () => {
    const surrenderMenu = document.createElement("div");
    const title = document.createElement("h3");
    const confirmButton = document.createElement("button");
    const backGameButton = document.createElement("button");

    surrenderMenu.classList.add("surrender-menu");
    surrenderMenu.classList.add("hide");

    title.textContent = "Are you sure?";
    confirmButton.textContent = "Yes!";
    backGameButton.textContent = "Nop";

    confirmButton.addEventListener("click", goBackMainMenu);
    backGameButton.addEventListener("click", hideMenu);

    surrenderMenu.appendChild(title);
    surrenderMenu.appendChild(confirmButton);
    surrenderMenu.appendChild(backGameButton);

    return surrenderMenu;
  };

  // PRIVATE FUNCTIONS
  const hideMenu = (event) => {
    event.target.parentNode.classList.add("hide");
  };

  const goBackMainMenu = (event) => {
    event.target.parentNode.classList.add("hide");
    pageComponent.showMainMenu();
  };

  return { setUp };
})();
