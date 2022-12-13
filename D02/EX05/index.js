function calculateSumRecursion(array) {
  if (array.length < 1) {
    sum = 0;
    return sum;
  }
  else if (i < array.length) {
    sum = array[i] + previous;
    previous = sum;
    i++;
    array = array.slice(0, array.length + 1);
    return calculateSumRecursion(array);
  }

  else {
    previous = 0;
    i = 0;
    return sum;
  }
}

let array = [];
let sum = 0;
let i = 0;
let previous = 0;

calculateSumRecursion(array);


// Do not remove or change this line, or the tests won't work
export { calculateSumRecursion };
