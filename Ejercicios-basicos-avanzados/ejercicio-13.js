const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, name) {
  for (let i = 0; i < nameList.length; i++) {
    const element = nameList[i];
    if (name === element) {
      return `${name} se encuentra en la posición ${i}`;
    }
  }
  return false;
}
console.log(nameFinder(names, "Marc"));
