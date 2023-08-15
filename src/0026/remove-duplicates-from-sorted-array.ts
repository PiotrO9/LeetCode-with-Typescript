function removeDuplicates(nums: number[]): number {
  let count: number = 0;
  let len: number = nums.length;
  let last = NaN;

  for (let i = 0; i < len; i++) {
    if (nums[i] !== last) {
      nums[count] = nums[i];
      last = nums[i];
      count++;
    }
  }

  return count;
}
