function rotate(matrix: number[][]): void {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][n - 1 - i];
      matrix[n - 1 - j][n - 1 - i] = temp;
    }
  }
  matrix.reverse();
}
