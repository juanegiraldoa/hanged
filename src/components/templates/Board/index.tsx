import { letters } from "../../../constants/Letters";
import Button from "../../atoms/Button";

interface BoardProps {
  usedLetters: string[];
  selectLetter: (letter: string) => boolean;
}

const Board: React.FC<BoardProps> = ({ usedLetters = [], selectLetter }) => {
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
