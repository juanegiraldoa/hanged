type Letter = {
  letter: string;
  accent?: string;
};

const letters: Letter[] = [
  { letter: "a", accent: "á" },
  { letter: "b" },
  { letter: "c" },
  { letter: "d" },
  { letter: "e", accent: "é" },
  { letter: "f" },
  { letter: "g" },
  { letter: "h" },
  { letter: "i", accent: "í" },
  { letter: "j" },
  { letter: "k" },
  { letter: "l" },
  { letter: "m" },
  { letter: "n" },
  { letter: "ñ" },
  { letter: "o", accent: "ó" },
  { letter: "p" },
  { letter: "q" },
  { letter: "r" },
  { letter: "s" },
  { letter: "t" },
  { letter: "u", accent: "ú" },
  { letter: "v" },
  { letter: "w" },
  { letter: "x" },
  { letter: "y" },
  { letter: "z" },
];

const lettersArray: string[] = letters.map(({ letter }) => letter);

export { letters, lettersArray };
