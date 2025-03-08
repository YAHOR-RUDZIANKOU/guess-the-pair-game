export const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const duplicateArray = (arr) => {
  let newArr = arr.concat(arr);
  return newArr;
};

export const createIconsArray = (dif) => {
  let arrIcons = ["fa-birthday-cake", "fa-apple-alt", "fa-pizza-slice", "fa-ice-cream", "fa-hamburger", "fa-wine-glass", "fa-fish", "fa-glass-whiskey"];
  if (dif === 10) {
    return arrIcons.slice(0, 5);
  } else if (dif === 12) {
    return arrIcons.slice(0, 6);
  } else if (dif === 14) {
    return arrIcons.slice(0, 7);
  } else if (dif === 16) {
    return arrIcons;
  }
};

// fireConfetti - логика для confetti
export const fireConfetti = () => {
  let duration = 8000;
  let animationEnd = Date.now() + duration;
  let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  let interval = setInterval(function () {
    let timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
    }
    let particleCount = 50 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 250);
};

export const updateRecords = (time, dif) => {
  if (localStorage.getItem(`gameResult${dif}`) === null) {
    let arr = [time];
    localStorage.setItem(`gameResult${dif}`, JSON.stringify(arr));
    return arr;
  } else {
    let pastRecords = JSON.parse(localStorage.getItem(`gameResult${dif}`));
    // console.log(pastRecords)
    pastRecords.push(time);
    pastRecords.sort((a, b) => a - b);
    let newRecords = pastRecords.slice(0, 5);
    localStorage.setItem(`gameResult${dif}`, JSON.stringify(newRecords));
    // localStorage.clear()
    return newRecords;
  }
};

export const createRecordList = (arr) => {
  // console.log('1')
  let recordWrap = document.createElement("div");
  recordWrap.classList.add("record__wrapper");

  let recordContainer = document.createElement("div");
  recordContainer.classList.add("record__container");

  let recordTitle = document.createElement("div");
  recordTitle.classList.add("record__title");
  recordTitle.innerText = "Your records:";

  let recordItems = document.createElement("div");
  recordItems.classList.add("record__items");

  for (let i = 0; i < arr.length; i++) {
    let recordItem = document.createElement("div");
    recordItem.classList.add("record__item");
    recordItem.innerText = `${i + 1}) ${arr[i]} seconds`;

    recordItems.appendChild(recordItem);
  }

  recordContainer.appendChild(recordTitle);
  recordContainer.appendChild(recordItems);

  recordWrap.appendChild(recordContainer);

  document.body.insertBefore(recordWrap, document.body.firstChild);

  return recordWrap;
};

export const createRecordClick = (mainWrap,count) => {
  let div=document.createElement('div');
  div.classList.add('record__click' ,'fade-in');
  div.innerHTML=`Всего кликов: ${count}`;

  mainWrap.appendChild(div);
};