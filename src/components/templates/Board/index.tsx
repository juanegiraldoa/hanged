import { letters } from '@/constants/Letters';
import Button from '@/components/atoms/Button';
import { FC } from 'react';

interface BoardProps {
  usedLetters: string[];
  selectLetter: (letter: string) => boolean;
}

const Board: FC<BoardProps> = ({ usedLetters = [], selectLetter }) => {
  return (
    <div className='board'>
      {letters.map(({ letter }, key) => (
        <Button
          key={key}
          className='letter-button'
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
