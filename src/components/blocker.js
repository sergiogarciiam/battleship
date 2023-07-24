export const blockerComponent = (() => {
  const setUp = (isBot) => {
    const blocker = document.createElement("div");
    blocker.classList.add("blocker");

    if (isBot) blocker.classList.add("hide");

    return blocker;
  };

  return { setUp };
})();
