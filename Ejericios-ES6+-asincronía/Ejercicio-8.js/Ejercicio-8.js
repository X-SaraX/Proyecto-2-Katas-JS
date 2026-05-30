/*
fetch("https://thronesapi.com/api/v2/Characters")
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

*/

const API_URL_BASE = "https://thronesapi.com/api/v2/Characters";
const character_container = document.querySelector("#character-list");
const img = document.querySelector(".character-image");

// Variable vacía aquí fuera para guardar los personajes
let misPersonajes = [];

const getCharacters = async () => {
  const res = await fetch(API_URL_BASE);
  const data = await res.json();

  misPersonajes = data;

  renderCharacters(data);
};

getCharacters();

const renderCharacters = (characters) => {
  for (const character of characters) {
    const option = document.createElement("option");
    option.value = character.fullName;
    option.text = character.fullName;

    character_container.append(option);
  }
};

// Event Listener
character_container.addEventListener("change", (event) => {
  console.log("Por lo menos ahora funciona");

  // Guarda el nombre del personaje que el usuario acaba de seleccionar
  const nombreSeleccionado = event.target.value;

  // Busca en la lista al personaje que tenga ese mismo nombre
  const personajeEncontrado = misPersonajes.find(
    (p) => p.fullName === nombreSeleccionado,
  );

  // Modificamos la imagen
  if (personajeEncontrado) {
    img.src = personajeEncontrado.imageUrl;
  }
});

//Fallos que no sé como arreglar: al principio no aparece ninguna imagen, lo estoy pasando mal con la asincronía 😫
