const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

//Década de los 70
let movies_by_decades = {};
let decade_1970 = [];
let decade_1980 = [];
let decade_1990 = [];
let decade_2000 = [];
let decade_2010 = [];
for (const starWarsMovie of starWarsMovies) {
  //Década de los 70
  if (starWarsMovie.releaseYear >= 1970 && starWarsMovie.releaseYear < 1980) {
    decade_1970.push(starWarsMovie.title);
    movies_by_decades.decade_1970 = decade_1970;
  } else if (
    //Década de los 80
    starWarsMovie.releaseYear >= 1980 &&
    starWarsMovie.releaseYear < 1990
  ) {
    decade_1980.push(starWarsMovie.title);
    movies_by_decades.decade_1980 = decade_1980;
  } else if (
    //Década de los 90
    starWarsMovie.releaseYear >= 1990 &&
    starWarsMovie.releaseYear < 2000
  ) {
    decade_1990.push(starWarsMovie.title);
    movies_by_decades.decade_1990 = decade_1990;
  } else if (
    //Década de los 2000
    starWarsMovie.releaseYear >= 2000 &&
    starWarsMovie.releaseYear < 2010
  ) {
    decade_2000.push(starWarsMovie.title);
    movies_by_decades.decade_2000 = decade_2000;
  } else if (
    //Decada de los 2010
    starWarsMovie.releaseYear >= 2010 &&
    starWarsMovie.releaseYear < 2020
  ) {
    decade_2010.push(starWarsMovie.title);
    movies_by_decades.decade_2010 = decade_2010;
  }
}
console.log(movies_by_decades);

/* 
//Tras un poco de estudio descubrí que también se puede hacer de esta forma :^

let movies_by_decade = {};

for (const movie of starWarsMovies) {
  const decade = Math.floor(movie.releaseYear / 10) * 10;

  // Si esa década no existe en el objeto, la creamos
  if (!movies_by_decade[decade]) {
    movies_by_decade[decade] = [];
  }
  //finalmente introducimos cada título a su array correspondiente
  movies_by_decade[decade].push(movie.title);
}

console.log(movies_by_decade);
 */
