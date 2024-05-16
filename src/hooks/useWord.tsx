import { useEffect, useState } from "react";
import { words } from "../constants/Words";

interface useWordProps {
  word: string;
  nextWord: () => void;
  censoredWord: string;
  selectLetter: (letter: string) => boolean;
  letters: string[];
  errors: number;
  resetGame: () => void;
}

const useWord = (): useWordProps => {
  const [word, setWord] = useState<string>();
  const [censoredWord, setCensoredWord] = useState<string>("");
  const [letters, setLetters] = useState<string[]>([]);
  const [errors, setErrors] = useState<number>(0);
  const [usedWords, setUsedWords] = useState<string[]>([]);
  const [streak, setStreak] = useState<number>(0);

  useEffect(() => nextWord(), []);

  useEffect(() => {
    if (errors === 6) {
      alert(`Failed with streak of ${streak}`);
      resetGame();
    }
  }, [errors]);

  useEffect(() => {
    if (!censoredWord.replace(/ /g, "").includes("_")) {
      setStreak((s) => s + 1);
      nextWord();
    }
  }, [censoredWord]);

  const nextWord = () => {
    if (words.length !== usedWords.length) {
      const selectedWord = words[Math.round(Math.random() * (words.length - 1))];
      const duplicatedWord = usedWords.find((used) => used === selectedWord);
      if (!duplicatedWord) {
        setWord(selectedWord);
        setCensoredWord("_ ".repeat(selectedWord.length).trimEnd());
        setLetters([]);
        setErrors(0);
        setUsedWords((prevUsed) => [...prevUsed, selectedWord]);
      } else nextWord();
    } else resetGame();
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

  const resetGame = () => {
    setUsedWords([]);
    nextWord();
    setStreak(0);
  };

  return { word, nextWord, censoredWord, selectLetter, letters, errors, resetGame };
};

export default useWord;
