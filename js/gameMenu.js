export const createGameMenu = () => {
  const mainWrapper = document.querySelector(".main");

  const mainTitle = document.createElement("div");
  mainTitle.innerText='Выбор сложности'
  mainTitle.classList.add("main__title", "title");

  const levelButtons = document.createElement("div");
  levelButtons.classList.add("level__buttons");

  const createDifficultButton = (difficulty) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = `${difficulty} карт`;

    return button;
  };

  levelButtons.append(createDifficultButton(10));
  levelButtons.append(createDifficultButton(12));
  levelButtons.append(createDifficultButton(14));
  levelButtons.append(createDifficultButton(16));

  mainWrapper.append(mainTitle);
  mainWrapper.append(levelButtons);

};
