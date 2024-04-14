import useWord from "./hooks/useWord";
import Button from "./components/atoms/Button";
import Typography from "./components/atoms/Typography";
import Board from "./components/templates/Board";

const App = () => {
  const { nextWord, selectLetter, letters, censoredWord, errors } = useWord();

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
