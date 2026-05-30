const pokemonImg = document.querySelector(".random-image");

// Generar número aleatorio
const num = Math.floor(Math.random() * 151) + 1;

const API_URL = `https://pokeapi.co/api/v2/pokemon/${num}`;

// 4. Creamos la función asíncrona con la estructura oficial de tu profe
const getPokemonRandom = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    pokemonImg.src = data.sprites.front_default;
    pokemonImg.alt = data.name;

    console.log(`Ha salido: ${data.name}!, que es el número ${num}`);
  } catch (error) {
    // Si la API falla, atrapamos el error aquí para que no rompa la página
    console.error("Hubo un error al traer el Pokémon:", error);
  }
};

getPokemonRandom();
