import * as style from '@/app.css';
import { Button } from '@/components/atoms';
import { StickMan } from '@/components/templates';
import { lettersArray } from '@/constants/Letters';
import { words } from '@/constants/Words';
import { render } from 'preact';
import { useCallback, useState } from 'preact/hooks';

function App() {
  const [pendingWord, setPendings] = useState<string[]>(words);
  const [word, setWord] = useState<string[]>([]);
  const [censored, setCensored] = useState<string[]>([]);
  const [usedLetters, setUsed] = useState<string[]>([]);
  const [errors, setErrors] = useState<number>(0);

  const getRandomWord = useCallback(
    function (): void {
      const length = pendingWord.length;
      const index = (Math.random() * length).toFixed(0);
      const wordSelected = words[index].split('');
      setWord(wordSelected);
      setCensored(wordSelected.map(() => '_'));
      setPendings(pendingWord.filter((_, i) => i !== parseInt(index)));
    },
    [pendingWord],
  );

  const findLetterInWord = useCallback(
    function (letter: string) {
      let localWord = word.map((l) => l);
      let localCensored = censored.map((l) => l);
      let indexLetter = localWord.findIndex((l) => l === letter);
      setUsed((u) => [...u, letter]);
      if (indexLetter === -1) {
        plusError();
        return;
      }
      do {
        localWord[indexLetter] = '_';
        localCensored[indexLetter] = letter;
        setCensored(localCensored);
        setWord(localWord);
        indexLetter = localWord.findIndex((l) => l === letter);
      } while (indexLetter !== -1);
    },
    [word, censored],
  );

  const plusError = useCallback(() => {
    const newError = errors + 1;
    setErrors(errors);
    if (newError === 6) loseGame();
  }, [errors]);

  const loseGame = useCallback(function () {
    alert('Jaja Tonto');
    resetAllGame();
  }, []);

  const resetAllGame = () => {
    setErrors(0);
    setPendings(words);
    setUsed([]);
  };

  return (
    <main className={style.main}>
      <div className={style.wordContainer}>
        <h1>{censored.join(' ')}</h1>
        <div className={style.errorContainer}>
          <h2>Streak: </h2>
          <StickMan errorCounter={errors} />
          <h2>Errors: {errors}</h2>
        </div>
      </div>
      <hr />
      <div className={style.letterContainer}>
        {lettersArray.map((letter) => (
          <Button
            key={letter}
            disabled={usedLetters.find((usedLetter) => usedLetter === letter)}
            onClick={() => findLetterInWord(letter)}
            className={style.letterButton}
          >
            {letter}
          </Button>
        ))}
      </div>
      <Button className={style.buttonNext} onClick={getRandomWord}>
        Next Word
      </Button>
    </main>
  );
}

render(<App />, document.getElementById('app'));
