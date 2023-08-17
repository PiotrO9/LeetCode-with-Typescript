function letterCombinations(digits: string): string[] {
  if (digits === "") {
    return [];
  }

  const letters: string[] = [
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  function generateCombinations(
    index: number,
    currentCombination: string
  ): string[] {
    if (index === digits.length) {
      return [currentCombination];
    }

    const currentDigit: number = parseInt(digits[index], 10);
    const letterSet: string = letters[currentDigit - 2];
    const combinations: string[] = [];

    for (const letter of letterSet) {
      const newCombination: string = currentCombination + letter;
      combinations.push(...generateCombinations(index + 1, newCombination));
    }

    return combinations;
  }

  return generateCombinations(0, "");
}
