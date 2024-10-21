import { lettersArray } from '@/constants/Letters';
import { useCallback, useState } from 'preact/hooks';

const useLetters = () => {
  const [usedLetters, setUsedLetters] = useState<string[]>(lettersArray);

  const onPressKey = useCallback(
    function (letter: string): void {
      const exists = usedLetters.some((l) => letter === l);
      if (!exists) {
        setUsedLetters((used) => [...used, letter]);
        selectLetter(letter);
      }
    },
    [usedLetters],
  );

  const selectLetter = useCallback(function (letter: string) {
    console.log(letter);
  }, []);

  return { onPressKey };
};

export default useLetters;
