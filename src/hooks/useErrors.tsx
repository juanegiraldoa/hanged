import { useEffect } from 'react';

interface UseErrorsProps {
  canvas: any;
}

const useErrors = (errorCounter: number): UseErrorsProps => {
  const canvas = <canvas id='stickmanCanvas' width='200' height='215' />;

  useEffect(() => {
    const canvas: any = document.getElementById('stickmanCanvas');
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = '#FFFFFF';

    const drawHead = (): void => {
      ctx.beginPath();
      ctx.arc(100, 50, 20, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawBody = (): void => {
      ctx.moveTo(100, 70);
      ctx.lineTo(100, 150);
      ctx.stroke();
    };

    const drawLeftArm = (): void => {
      ctx.moveTo(100, 80);
      ctx.lineTo(75, 100);
      ctx.stroke();
    };

    const drawRightArm = (): void => {
      ctx.moveTo(100, 80);
      ctx.lineTo(125, 100);
      ctx.stroke();
    };

    const drawLeftLeg = (): void => {
      ctx.moveTo(100, 150);
      ctx.lineTo(75, 200);
      ctx.stroke();
    };

    const drawRightLeg = (): void => {
      ctx.moveTo(100, 150);
      ctx.lineTo(125, 200);
      ctx.stroke();
    };

    const clear = (): void => ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (errorCounter === 0) clear();
    if (errorCounter === 1) drawHead();
    if (errorCounter === 2) drawBody();
    if (errorCounter === 3) drawLeftArm();
    if (errorCounter === 4) drawRightArm();
    if (errorCounter === 5) drawLeftLeg();
    if (errorCounter === 6) drawRightLeg();
  }, [errorCounter]);

  return { canvas };
};

export default useErrors;
