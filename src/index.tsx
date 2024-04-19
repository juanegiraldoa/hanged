import { render } from "preact";
import { useEffect } from "preact/hooks";
import { lettersArray } from "./constants/Letters";
import useWord from "./hooks/useWord";
import Typography from "./components/atoms/Typography";
import Errors from "./components/templates/Errors";
import Board from "./components/templates/Board";
import Button from "./components/atoms/Button";
import "./index.css";

export const App = () => {
  const { nextWord, selectLetter, letters, censoredWord, errors } = useWord();

  useEffect(() => {
    const handleKeyPress = ({ key }) => {
      if (lettersArray.find((l) => l === key)) selectLetter(key.toLowerCase());
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectLetter]);

  return (
    <div style={{ maxWidth: "700px", margin: "80px auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "2rem" }}>
        <Typography Element="h2">{censoredWord}</Typography>
        <Errors errorCounter={errors} />
      </div>
      <Board usedLetters={letters} selectLetter={selectLetter} />
      <Button
        style={{ width: "100%", margin: "10px 0px", padding: "10px", boxSizing: "border-box" }}
        onClick={nextWord}
      >
        Next Palabra
      </Button>
    </div>
  );
};

render(<App />, document.getElementById("app"));