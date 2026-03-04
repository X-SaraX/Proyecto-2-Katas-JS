const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  let final_objetcs = {};
  for (const word of list) {
    if (!final_objetcs[word]) {
      final_objetcs[word] = 1;
    } else if (final_objetcs[word]) {
      final_objetcs[word]++;
    }
  }
  return final_objetcs;
}

console.log(repeatCounter(words));
