import { useEffect, useState } from "react";
import { words } from "../constants/Words";

interface useWordProps {
  word: string;
  nextWord: () => void;
  censoredWord: string;
  selectLetter: (letter: string) => boolean;
  letters: string[];
  errors: number;
}

const useWord = (): useWordProps => {
  const [word, setWord] = useState<string>();
  const [censoredWord, setCensoredWord] = useState<string>();
  const [letters, setLetters] = useState<string[]>([]);
  const [errors, setErrors] = useState<number>(0);
  // const [usedWords, setUsedWords] = useState([]);

  useEffect(() => nextWord(), []);

  const nextWord = () => {
    const selectedWord = words[Math.round(Math.random() * (words.length - 1))];
    setWord(selectedWord);
    setCensoredWord("_ ".repeat(selectedWord.length).trimEnd());
    setLetters([]);
    setErrors(0);
  };

  const selectLetter = (letter: string) => {
    if (!letters.find((l) => letter === l)) {
      setLetters((prevLetters) => [...prevLetters, letter]);
      let splitedWord = word!.split("");
      let splitedCensoredWord = censoredWord!.split(" ");
      const lettersInWord = splitedWord.filter((wl) => wl === letter);
      lettersInWord.forEach(() => {
        const letterIndex = splitedWord.findIndex((wl) => wl === letter);
        splitedWord[letterIndex] = "_";
        splitedCensoredWord[letterIndex] = letter;
      });
      if (lettersInWord.length === 0) setErrors(errors + 1);
      setCensoredWord(splitedCensoredWord.join(" "));
      return splitedCensoredWord.some((l) => l !== "_");
    }
  };

  return { word, nextWord, censoredWord, selectLetter, letters, errors };
};

export default useWord;
