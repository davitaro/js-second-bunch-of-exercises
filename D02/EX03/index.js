let matrix = [];

let columnIndex;


calculateMatrixColumnSum(matrix, columnIndex);

function calculateMatrixColumnSum(matrix, columnIndex) {
  let previous = 0;
  let sum = 0;
  let i = 0;
  let col = matrix.map(element => element[columnIndex]); // col is array with values from particular column of original matrix
  
  while (i < col.length) { //while we are inside the array
    sum = col[i] + previous;
    previous = sum;
    i++
  }
  console.log(sum);
  return sum;
}


// Do not remove or change this line, or the tests won't work
export { calculateMatrixColumnSum };
