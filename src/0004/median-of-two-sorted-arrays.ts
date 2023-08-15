const FindKthSmallList = (
  A: number[],
  aL: number,
  a: number,
  B: number[],
  bL: number,
  b: number,
  K: number
): number => {
  if (a > b) return FindKthSmallList(B, bL, b, A, aL, a, K);

  if (a === 0) return B[bL + K - 1];
  if (K === 1) return Math.min(A[aL], B[bL]);

  const aK = Math.min(a, Math.ceil(K / 2));
  const bK = K - aK;

  if (A[aL + aK - 1] < B[bL + bK - 1]) {
    return FindKthSmallList(A, aL + aK, a - aK, B, bL, b, K - aK);
  } else {
    return FindKthSmallList(A, aL, a, B, bL + bK, b - bK, K - bK);
  }
};
