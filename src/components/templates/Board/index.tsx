import { letters } from "../../../constants/Letters";
import Button from "../../atoms/Button";

interface BoardProps {
  usedLetters: string[];
  selectLetter: (letter: string) => boolean;
}

const Board: React.FC<BoardProps> = ({ usedLetters = [], selectLetter }) => {
  return (
    <div className="board">
      {letters.map(({ letter }, key) => (
        <Button
          key={key}
          className="letter-button"
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
