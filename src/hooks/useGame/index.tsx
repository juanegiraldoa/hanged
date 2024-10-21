import { useLetters } from '@/hooks';
import { useCallback, useEffect, useState } from 'preact/hooks';

const useGame = () => {
  const { onPressKey } = useLetters();
  const [streak, setStreak] = useState<number>(0);
  // const [word, setWord] = useState<string>();

  useEffect(() => {
    window.addEventListener('keydown', ({ key }) => onPressKey(key));
    return () => window.removeEventListener('keydown', ({ key }) => onPressKey(key));
  }, [onPressKey]);

  const plusStreak = useCallback((): void => setStreak((prev) => prev + 1), []);

  const resetGame = useCallback((): void => {
    setStreak(0);
  }, []);

  return { streak, plusStreak, resetGame };
};

export default useGame;
