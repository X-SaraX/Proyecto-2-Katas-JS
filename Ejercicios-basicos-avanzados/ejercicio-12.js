const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  let noDuplicates = [];
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (!noDuplicates.includes(element)) {
      noDuplicates.push(element);
    }
  }
  return noDuplicates;
}

console.log(removeDuplicates(duplicates));
