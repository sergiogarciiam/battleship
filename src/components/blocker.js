export const blockerComponent = (() => {
  const setUp = (isTurn) => {
    const blocker = document.createElement("div");
    blocker.classList.add("blocker");

    if (!isTurn) blocker.classList.add("hide");

    return blocker;
  };

  return { setUp };
})();
