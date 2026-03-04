function swap(array, index_1, index_2) {
  const value = array[index_1];
  if (index_1 >= array.length || index_2 >= array.length) {
    return "Ha habido un error, por favor asegúrate que ambos números son válidos";
  }
  array.splice(index_1, 1, array[index_2]);
  //array.splice(0,1, "La mujer invisible")
  //['La mujer invisible','Mr. Fantástico','La mujer invisible','La cosa']

  array.splice(index_2, 1, value);
  //array.splice(2, 1, "La antorcha humana")
  return fantasticFour;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

console.log(swap(fantasticFour, 1, 0));
