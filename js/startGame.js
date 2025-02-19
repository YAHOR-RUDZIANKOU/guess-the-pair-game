import { shuffleArray, duplicateArray, createIconsArray, fireConfetti } from "./utils.js";
import { createCards } from "./createCards.js";
import { createGameMenu } from "./gameMenu.js";

export const startGame = (dif) => {
  const mainWrapper = document.querySelector(".main");
  mainWrapper.innerHTML = "";

  // arrayIcons - массив иконок, размер которого зависит от dif
  const arrayIcons = createIconsArray(dif);
  const doublearrayIcons = duplicateArray(arrayIcons);
  shuffleArray(doublearrayIcons);
  createCards(doublearrayIcons, mainWrapper);

  const wrapperItem = Array.from(document.querySelectorAll(".wrapper__item"));

  let firstClick = null;
  let secondClick = null;
  let isFirstClick = false;
  let backSideFIR;
  let backSideSEC;

  // логика игры
  wrapperItem.forEach((value, index) => {
    value.addEventListener("click", (event) => {
      const front = event.target.closest(".front");
      // когда видна передняя часть
      if (front) {
        if (!isFirstClick) {
          value.classList.add("flipped");
          firstClick = index;
          isFirstClick = true;
          // console.log("первый раз");
        } else {
          // console.log("второй раз");
          value.classList.add("flipped");
          secondClick = index;

          backSideFIR = wrapperItem[firstClick].firstElementChild;
          const iconFIR = backSideFIR.firstElementChild;
          backSideSEC = wrapperItem[secondClick].firstElementChild;
          const iconSEC = backSideSEC.firstElementChild;

          if (iconFIR.className === iconSEC.className) {
            setTimeout(() => {
              isFirstClick = false;
              backSideFIR.classList.add("trueBaground");
              backSideSEC.classList.add("trueBaground");
              // console.log("мы равны");
            }, 1000);
          } else {
            setTimeout(() => {
              wrapperItem[firstClick].classList.remove("flipped");
              wrapperItem[secondClick].classList.remove("flipped");
              isFirstClick = false;
              // console.log("мы не равны");
            }, 1000);
          }
        }
      }

      if (wrapperItem.every((elem) => elem.classList.contains("flipped"))) {
        const blocker = document.createElement("div");
        blocker.classList.add("blocker");
        document.body.appendChild(blocker);

        setTimeout(() => {
          fireConfetti();
          let music = new Audio("../music/mus.mp3");
          music.play();
        }, 1000);

        setTimeout(() => {
          createGameMenu();
          document.body.removeChild(blocker);
        }, 16000);
      }
    });
  });
};
