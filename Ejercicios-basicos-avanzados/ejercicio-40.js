//Parte 1
function findArrayIndex(array, text) {
  for (const character of array) {
    if (text === character) {
      const position = array.indexOf(character);
      console.log(`${character} ha sido encontrado en la posición ${position}`);
      return position;
    }
  }
  if (true) {
    console.log(`${text} no ha sido encontrado`);
    return -1;
  }
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

findArrayIndex(mainCharacters, "Han Solo");
findArrayIndex(mainCharacters, "Spider-Man");

//Parte 2
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
    return array;
  } else {
    return mainCharacters;
  }
}

console.log(removeItem(mainCharacters, "Anakin"));
console.log(removeItem(mainCharacters, "Iron Man"));
