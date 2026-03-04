const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  let mutantes = [];
  for (const mutant of mutants) {
    if (mutant.power === power) {
      mutantes.push(mutant.name);
    }
  }
  if (mutantes.length === 1) {
    console.log(`El mutante con el poder ${power} es: ${mutantes}`);
  } else if (mutantes.length > 1) {
    console.log(
      `Se han encontrado múltiples mutantes con el poder ${power}: ${mutantes}`
    );
  } else {
    console.log("No se han encontrado mutantes con el poder " + power);
  }
}

findMutantByPower(mutants, "magnetism");
