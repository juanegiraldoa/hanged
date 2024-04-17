import { letters } from "../../../constants/Letters";
import Button from "../../atoms/Button";

const Board = ({ usedLetters = [], selectLetter }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "5px" }}>
      {letters.map(({ letter }, key) => (
        <Button
          key={key}
          style={{ width: "50px", height: "50px" }}
          disabled={usedLetters.find((usedLetter) => usedLetter === letter)}
          onClick={() => selectLetter(letter)}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default Board;
