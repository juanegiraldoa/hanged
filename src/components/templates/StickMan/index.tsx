import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

export default function StickMan({ errors, ...rest }: any) {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = '#FFFFFF';
    setCtx(context);
  }, []);

  useEffect(() => {
    if (errors === 0) clear();
    if (errors === 1) drawHead();
    if (errors === 2) drawBody();
    if (errors === 3) drawLeftArm();
    if (errors === 4) drawRightArm();
    if (errors === 5) drawLeftLeg();
    if (errors === 6) drawRightLeg();
  }, [errors]);

  const drawHead = useCallback((): void => {
    ctx.beginPath();
    ctx.arc(100, 50, 20, 0, Math.PI * 2);
    ctx.stroke();
  }, [ctx]);

  const drawBody = useCallback((): void => {
    ctx.moveTo(100, 70);
    ctx.lineTo(100, 150);
    ctx.stroke();
  }, [ctx]);

  const drawLeftArm = useCallback((): void => {
    ctx.moveTo(100, 80);
    ctx.lineTo(75, 100);
    ctx.stroke();
  }, [ctx]);

  const drawRightArm = useCallback((): void => {
    ctx.moveTo(100, 80);
    ctx.lineTo(125, 100);
    ctx.stroke();
  }, [ctx]);

  const drawLeftLeg = useCallback((): void => {
    ctx.moveTo(100, 150);
    ctx.lineTo(75, 200);
    ctx.stroke();
  }, [ctx]);

  const drawRightLeg = useCallback((): void => {
    ctx.moveTo(100, 150);
    ctx.lineTo(125, 200);
    ctx.stroke();
  }, [ctx]);

  const clear = useCallback((): void => {
    ctx.clearRect(0, 0, ctx.width, ctx.height);
  }, [ctx]);

  return (
    <canvas
      ref={canvasRef}
      width='200'
      height='215'
      style={{ border: '1px solid white' }}
      {...rest}
    />
  );
}
