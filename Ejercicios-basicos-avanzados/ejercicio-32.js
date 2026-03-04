const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1961 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

function findOldestXMen(xMen) {
  let year = 99999;
  let oldest_xMen = "";
  for (const superhero of xMen) {
    if (superhero.year < year) {
      year = superhero.year;
      oldest_xMen = superhero.name;
    }
  }
  console.log("El xMen más antíguo es: " + oldest_xMen);
  return oldest_xMen;
}
findOldestXMen(xMen);
