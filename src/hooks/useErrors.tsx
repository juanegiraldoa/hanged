import { useEffect } from "react";

const useErrors = (errorCounter) => {
  const canvas = <canvas id="stickmanCanvas" width="200" height="215" />;

  useEffect(() => {
    const canvas: any = document.getElementById("stickmanCanvas");
    const ctx = canvas.getContext("2d");

    const drawHead = () => {
      ctx.beginPath();
      ctx.arc(100, 50, 20, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawBody = () => {
      ctx.moveTo(100, 70);
      ctx.lineTo(100, 150);
      ctx.stroke();
    };

    const drawLeftArm = () => {
      ctx.moveTo(100, 80);
      ctx.lineTo(75, 100);
      ctx.stroke();
    };

    const drawRigthArm = () => {
      ctx.moveTo(100, 80);
      ctx.lineTo(125, 100);
      ctx.stroke();
    };

    const drawLeftLeg = () => {
      ctx.moveTo(100, 150);
      ctx.lineTo(75, 200);
      ctx.stroke();
    };

    const drawRigthLeg = () => {
      ctx.moveTo(100, 150);
      ctx.lineTo(125, 200);
      ctx.stroke();
    };

    const clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (errorCounter === 0) clear();
    if (errorCounter === 1) drawHead();
    if (errorCounter === 2) drawBody();
    if (errorCounter === 3) drawLeftArm();
    if (errorCounter === 4) drawRigthArm();
    if (errorCounter === 5) drawLeftLeg();
    if (errorCounter === 6) drawRigthLeg();
  }, [errorCounter]);

  return { canvas };
};

export default useErrors;
