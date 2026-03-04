const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
  let longestWord = stringList[0];
  for (let i = 0; i < stringList.length; i++) {
    const avenger = stringList[i];
    if (avenger.length > longestWord.length) {
      longestWord = avenger;
    }
  }
  return longestWord;
}

console.log(findLongestWord(avengers));
