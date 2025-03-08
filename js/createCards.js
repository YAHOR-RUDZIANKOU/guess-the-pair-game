import { createGameMenu } from "./gameMenu.js";

export const createCards = (arr, mainWrapper) => {
  const wrapperCard = document.createElement("div");
  wrapperCard.classList.add("wrapper__card");

  for (let i = 0; i < arr.length; i++) {
    const wrapperItem = document.createElement("div");
    wrapperItem.classList.add("wrapper__item");

    const frontSide = document.createElement("div");
    frontSide.classList.add("side", "front");

    const questionIcon = document.createElement("i");
    questionIcon.classList.add("fa", "fa-question-circle");
    frontSide.appendChild(questionIcon);

    const backSide = document.createElement("div");
    backSide.classList.add("side", "back");

    const cakeIcon = document.createElement("i");
    cakeIcon.classList.add("fa", `${arr[i]}`);
    backSide.appendChild(cakeIcon);
    
    wrapperItem.appendChild(backSide);
    wrapperItem.appendChild(frontSide);

    wrapperCard.appendChild(wrapperItem);
  }
  const divButton = document.createElement("div");
  divButton.classList.add("btnRest");
  const btn = document.createElement("button");
  btn.innerText = "Рестарт";
  btn.classList.add('button')
  divButton.appendChild(btn);

  mainWrapper.appendChild(wrapperCard);
  mainWrapper.appendChild(divButton);

  document.addEventListener("click", (event) => {
    if(event.target.closest('.button')){
      createGameMenu();
    }
  });

  return mainWrapper;
};
