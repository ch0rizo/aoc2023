const fs = require('fs');

fs.readFile('day-01-input.txt', (err, data) => {
  if (err) throw err;

  const input = data.toString().split('\n');
  const final = [];

  function eraseChar(array) {
    const regex = /[a-z]+/gi;
    for (i = 0; i < array.length; i++) {
      let result = array[i].replace(regex, '');
      let semi = [];
      if (result.length > 1) {
        semi.push(result[0] + result[result.length - 1]);
      } else {
        semi.push(result[0] + result[0]);
      }
      final.push(parseInt(semi));
    }
  }

  eraseChar(input);
  console.log(final);
  let sum = final.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log(sum);
  // Regex for å finne tall
  // Deretter gjør det om til int og adder tallene

  /*
  function sumOfArray(accumulator, currentValue) {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
  }

  console.log(final.reduce(sumOfArray));
  */
});
