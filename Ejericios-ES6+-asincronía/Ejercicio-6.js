// Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const total_scores = exams.reduce((acc, { score }) => acc + score, 0);

console.log(total_scores);

//Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().
// 1. Filtramos los aprobados
const aprobados = exams.filter((exam) => exam.score >= 5);

// 2. Sumamos las notas de esos aprobados
const total_aprobados = aprobados.reduce((acc, exam) => acc + exam.score, 0);

console.log(total_aprobados);

//Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

//como ya sabemos las notas las sacamos de la variable anterior
const media_total = total_scores / exams.length;
console.log(media_total);
