const toys = [
  { id: 5, name: "Transformers" },
  { id: 11, name: "LEGO" },
  { id: 23, name: "Hot Wheels" },
  { id: 40, name: "Rascador de gato" },
  { id: 40, name: "FurReal Friends gato interactivo" },
  { id: 60, name: "Nerf Blaster" },
  { id: 71, name: "Sylvanian Families - Familia gato" },
];

//eliminando del array original
for (let i = 0; i < toys.length; i++) {
  let toy = toys[i];
  if (toy.name.includes("gato")) {
    toys.splice(i, 1);
    i--;
  }
}
console.log(toys);

//creando un nuevo array
let noGatoArray = [];
for (const toy of toys) {
  if (!toy.name.includes("gato")) {
    noGatoArray.push(toy);
  }
}
console.log(noGatoArray);
