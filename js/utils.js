

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

