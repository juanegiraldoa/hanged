import { useEffect, useState } from "react";
import { words } from "../constants/Words";

const useWord = () => {
  const [word, setWord] = useState();
  const [censoredWord, setCensoredWord] = useState();
  const [letters, setLetters] = useState([]);
  const [errors, setErrors] = useState(0);
  // const [usedWords, setUsedWords] = useState([]);

  useEffect(() => nextWord(), []);

  const nextWord = () => {
    const selectedWord = words[Math.round(Math.random() * (words.length - 1))];
    setWord(selectedWord);
    setCensoredWord("_ ".repeat(selectedWord.length).trimEnd());
    setLetters([]);
    setErrors(0);
  };

  const selectLetter = (letter) => {
    if (!letters.find((l) => letter === l)) {
      setLetters((prevLetters) => [...prevLetters, letter]);
      let splitedWord = word.split("");
      let splitedCensoredWord = censoredWord.split(" ");
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
