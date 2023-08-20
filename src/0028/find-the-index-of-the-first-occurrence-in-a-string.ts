function strStr(haystack: string, needle: string): number {
  if (haystack === needle) {
    return 0;
  }

  let res = -1;
  const hashTable = new Map();

  for (let i = 0; i < haystack.length; i++) {
    const index = hashTable.get(needle);

    if (index !== undefined) {
      res = index;
      break;
    } else {
      let slicedHaystack = "";

      for (let j = 0, k = i; j < needle.length; j++, k++) {
        slicedHaystack += haystack[k];
      }

      if (slicedHaystack.length < needle.length) {
        res = -1;
        break;
      } else {
        if (slicedHaystack === needle) {
          return i;
        }
        hashTable.set(slicedHaystack, i);
      }
    }
  }
  return res;
}
