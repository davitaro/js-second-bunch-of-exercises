function sumNumbersWhileLoop(array) {
  let previous = 0;
  let sum = 0;
  let i = 0;

  while (i < array.length) { //while we are inside the array
    sum = array[i] + previous;
    previous = sum;
    i++
  }
  console.log(sum);
  return sum;
}

function sumNumbersForLoop(array) {
  //your code
  let previous = 0;
  let sum = 0;
  let i = 0;

  for (i = 0; i < array.length; i++) {
    sum = array[i] + previous;
    previous = sum;
  }
  console.log(sum);
  return sum;
}

let array = [];
//array.length = i; 
sumNumbersForLoop(array);
sumNumbersWhileLoop(array);


// Do not remove or change this line, or the tests won't work
export { sumNumbersWhileLoop, sumNumbersForLoop };
