const actors = [
  { name: "Leonardo DiCaprio", born: 1974 },
  { name: "Tom Hanks", born: 1956 },
  { name: "Meryl Streep", born: 1949 },
  { name: "Brad Pitt", born: 1963 },
  { name: "Johnny Depp", born: 1963 },
  { name: "Scarlett Johansson", born: 1984 },
  { name: "Jennifer Lawrence", born: 1990 },
  { name: "Denzel Washington", born: 1954 },
  { name: "Morgan Freeman", born: 1937 },
  { name: "Cate Blanchett", born: 1969 },
];

function calculate_actors_ages(actors) {
  const actual_date = new Date();
  const year = actual_date.getFullYear();
  const ages = [];
  for (const actor of actors) {
    const age = year - actor.born;
    ages.push(`${actor.name} tiene ${age} años`);
  }
  console.log(ages);
}
calculate_actors_ages(actors);
