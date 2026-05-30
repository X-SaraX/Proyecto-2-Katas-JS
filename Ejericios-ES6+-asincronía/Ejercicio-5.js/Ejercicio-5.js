const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const input = document.querySelector(
  "input[data-function = 'toFilterStreamers']",
);
input.addEventListener("input", () => {
  const input_streamer = streamers.filter((streamer) =>
    streamer.name.includes(input.value),
  );
  console.log(input_streamer); //Muestra todos los datos del streamer
  console.log(input_streamer[0].name); //Muestra solo el nombre del streamer
});
