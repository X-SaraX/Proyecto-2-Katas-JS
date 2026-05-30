//2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];

const copia_pointsList = [...pointsList];

//2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const copia_toy = { ...toy };

//2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const pointsListArray = [...pointsList1, ...pointsList2];
console.log(pointsListArray);

//2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const newtoy = { ...toy2, ...toyUpdate };
console.log(newtoy);

//2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial.
// De nuevo, usando spread operatos.
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const copia_colors = [...colors];
const menos_colors = colors.splice(1, 1);
