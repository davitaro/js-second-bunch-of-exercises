let matrix = [];
let row;

calculateMatrixDiagonalSum(matrix);

function calculateMatrixDiagonalSum(matrix) {
  let mainSum = 0;
  for (row = 0; row < matrix.length; row++) {
    mainSum = matrix[row][row] + mainSum;
  }
  console.log(mainSum);
  return mainSum;
}
// Do not remove or change this line, or the tests won't work
export { calculateMatrixDiagonalSum };
