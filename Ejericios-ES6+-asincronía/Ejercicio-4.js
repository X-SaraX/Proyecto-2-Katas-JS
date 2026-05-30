//4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adult_ages = ages.filter((age) => {
  return age > 18;
});

console.log(adult_ages);

//4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

const ages_par = ages.filter((age) => {
  return age % 2 == 0;
});

console.log(ages_par);

//4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan
// el gameMorePlayed = 'League of Legends'.
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const LoL_streamers = streamers.filter((streamer) => {
  return streamer.gameMorePlayed == "League of Legends";
});
console.log(LoL_streamers);

//4.4 Utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u'
// en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.

const u_streamers = streamers.filter((streamer) => {
  return streamer.name.includes("u" || "U");
});

console.log(u_streamers);

//4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed.
// Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a
// MAYUSCULAS cuando .age sea mayor que 35.

const legends_streamers = streamers.filter((streamer) => {
  const is_legends = streamer.gameMorePlayed.includes("Legends");

  if (is_legends && streamer.age > 35) {
    streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
  }

  return is_legends;
});

console.log(legends_streamers);
