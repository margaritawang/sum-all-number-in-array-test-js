function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;

  for (i of array) {
    if (Array.isArray(i)) {
      sum += sumItems(i);
    } else {
      console.log('number:', i);
      sum += i;
      console.log('sum:', sum);
    }
  }

  return sum;
}

module.exports = sumItems;