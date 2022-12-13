let matrix=[];


calculateMatrixSum(matrix);

function calculateMatrixSum(matrix) {
   let rowSum = matrix.map(r => r.reduce((a, b) => a + b)); //sums each row
   let sum = rowSum.reduce(add, 0);
   
   function add(accumulator, a) {
      return accumulator + a;
   }
   console.log(sum);
   return sum; 
}

// Do not remove or change this line, or the tests won't work

export { calculateMatrixSum };


