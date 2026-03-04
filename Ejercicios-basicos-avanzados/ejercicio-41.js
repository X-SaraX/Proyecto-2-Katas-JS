function rollDice(sides) {
  const min = Math.ceil(1);
  const max = Math.floor(sides);
  const random_num = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(random_num);
  return random_num;
}

rollDice(6);
