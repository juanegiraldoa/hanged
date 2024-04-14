import { useEffect } from "react";
import useWord from "./hooks/useWord";
import Button from "./components/atoms/Button";
import Typography from "./components/atoms/Typography";
import Board from "./components/templates/Board";
import { lettersArray } from "./constants/Letters";

const App = () => {
  const { nextWord, selectLetter, letters, censoredWord, errors } = useWord();

  useEffect(() => {
    const handleKeyPress = ({ key }) => {
      if (lettersArray.find((l) => l === key)) selectLetter(key.toLowerCase());
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectLetter]);

  return (
    <div style={{ width: "80%", margin: "80px auto" }}>
      <Typography Element="h2">{censoredWord}</Typography>
      <Typography Element="h3">{errors}</Typography>

      <Board usedLetters={letters} selectLetter={selectLetter} />
      <Button onClick={nextWord}>Next Palabra</Button>
    </div>
  );
};

export default App;
