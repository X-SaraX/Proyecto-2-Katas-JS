const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let sumNum = 0;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    sumNum += number;
  }
  const total = sumNum / numberList.length;
  return total;
}

console.log(average(numbers));
