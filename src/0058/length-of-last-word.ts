function lengthOfLastWord(s: string): number {
  const trimmed: string = s.trim();
  if (trimmed === "") {
    return 0;
  }

  const words: string[] = trimmed.split(" ");
  const lastWord: string = words[words.length - 1];

  return lastWord.length;
}
