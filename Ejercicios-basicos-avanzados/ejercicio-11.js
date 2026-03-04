const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  total = 0;
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (typeof element === typeof 1) {
      total += element;
    } else if (typeof element === typeof "string") {
      const numLetters = element.length;
      total += numLetters;
    }
  }
  return total;
}

console.log(averageWord(mixedElements));
