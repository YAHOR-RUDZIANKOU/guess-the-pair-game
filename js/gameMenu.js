import { startGame } from "./startGame.js";

export const createGameMenu = () => {
  const mainWrapper = document.querySelector(".main");
  mainWrapper.innerHTML='';
  const mainTitle = document.createElement("div");
  mainTitle.innerText = "Выбор сложности";
  mainTitle.classList.add("main__title", "title");
  const levelButtons = document.createElement("div");
  levelButtons.classList.add("level__buttons");

  const createDifficultButton = (difficulty) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = `${difficulty} карт`;

    button.addEventListener("click", () => {startGame(difficulty)});
    return button;
  };

  levelButtons.append(createDifficultButton(10));
  levelButtons.append(createDifficultButton(12));
  levelButtons.append(createDifficultButton(14));
  levelButtons.append(createDifficultButton(16));

  mainWrapper.append(mainTitle);
  mainWrapper.append(levelButtons);
};
