function searchMatrix(matrix: number[][], target: number): boolean {
  let foundRowIndex = matrix.length - 1;

  for (let i = 0; i < matrix.length - 1; i++) {
    if (target >= matrix[i][0] && target < matrix[i + 1][0]) {
      foundRowIndex = i;
      break;
    }
  }

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[foundRowIndex][i] === target) return true;
  }

  return false;
}
