//Luke Skywalker cumple años:
const jedi = { nombre: "Luke Skywalker", edad: 19 };

jedi.edad = 25;
console.log(jedi);

//Presentación al estilo Leia Organa
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

console.log(
  `Soy ${nombre} ${apellido}, tengo ${edad} años y soy una princesa de Alderaan`
);

//Calculando el coste total de sables de luz
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

console.log("Precio del sable de Shoto de Yoda: " + sable1.precio + "€");
console.log("Precio del sable de Darth Vader: " + sable2.precio + "€");

//Actualizando el precio final de las naves:
let precioBaseGlobal = 10000;

precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = {
  nombre: "Halcón Milenario",
  precioBase: 70000,
  precioFinal: 80000,
};

const precioFinal_1 = nave1.precioBase + precioBaseGlobal;
const precioFinal_2 = nave2.precioBase + precioBaseGlobal;

nave1.precioFinal = precioFinal_1;

nave2.precioFinal = precioFinal_2;

console.log(nave1.precioFinal, nave2.precioFinal);
