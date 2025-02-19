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
  if (dif === 4) {
    return arrIcons.slice(0, 2);
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
  let duration = 15 * 1000;
  let animationEnd = Date.now() + duration;
  let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  let interval = setInterval(function() {
    let timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
    }
    let particleCount = 50 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 250);
};
