function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else if (numberOne < numberTwo) {
    return numberTwo;
  } else if (numberOne === numberTwo) {
    return "Ambos números son iguales";
  }
}

console.log(greaterNumber(8, 0));
