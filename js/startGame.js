import { shuffleArray, duplicateArray, createIconsArray, fireConfetti, updateRecords, createRecordList ,createRecordClick} from "./utils.js";
import { createCards } from "./createCards.js";
import { createGameMenu } from "./gameMenu.js";

export const startGame = (dif) => {
  let count=0;
  const musicClickButton = new Audio("music/clickBTN.mp3");
  const musicWinChoose = new Audio("music/winChoose.mp3");
  const musicFailChoose = new Audio("music/failChoose.mp3");
  let music = new Audio("music/mus.mp3");
  let startGame = Date.now();
  // console.log(typeof(startGame))
  const mainWrapper = document.querySelector(".main");
  mainWrapper.innerHTML = "";

  // arrayIcons - массив иконок, размер которого зависит от dif
  const arrayIcons = createIconsArray(dif);
  const doublearrayIcons = duplicateArray(arrayIcons);
  shuffleArray(doublearrayIcons);
  let createCardWrapper=createCards(doublearrayIcons, mainWrapper);

  const btnReset=document.querySelector('.button');
  const wrapperItem = Array.from(document.querySelectorAll(".wrapper__item"));

  let firstClick = null;
  let secondClick = null;
  let isFirstClick = false;
  let isChecking = false;
  let backSideFIR;
  let backSideSEC;

  // логика игры
  wrapperItem.forEach((value, index) => {
    value.addEventListener("click", (event) => {
      if (isChecking) return;
      musicClickButton.currentTime = 0;
      musicClickButton.play();
      count++;
      // console.log(count)
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
            isChecking = true;
            setTimeout(() => {
              isChecking = false;
              isFirstClick = false;
              backSideFIR.classList.add("trueBaground");
              backSideSEC.classList.add("trueBaground");
              musicWinChoose.currentTime = 0;
              musicWinChoose.play();
              // console.log("мы равны");
            }, 1000);
          } else {
            isChecking = true;
            setTimeout(() => {
              isChecking = false;
              wrapperItem[firstClick].classList.remove("flipped");
              wrapperItem[secondClick].classList.remove("flipped");
              isFirstClick = false;
              musicFailChoose.currentTime = 0;
              musicFailChoose.play();
              setTimeout(() => {
                musicFailChoose.pause();
              }, 500);
              // console.log("мы не равны");
            }, 1000);
          }
        }
      }

      if (wrapperItem.every((elem) => elem.classList.contains("flipped"))) {
        let resultTime = +((Date.now() - startGame) / 1000).toFixed(2);
        let topTimes = updateRecords(resultTime,dif);
        let recordWrap = createRecordList(topTimes);
        
        createRecordClick(createCardWrapper,count)
        
        setTimeout(() => {
          fireConfetti();
          btnReset.disabled=true
          music.play();
          recordWrap.classList.add("addAnim");
          setTimeout(() => {
            music.pause();
          }, 8000);
        }, 1000);

        setTimeout(() => {
          createGameMenu();
        }, 9000);

        setTimeout(() => {
          recordWrap.classList.remove("addAnim");
        }, 5000);
      }
    });
  });
};
