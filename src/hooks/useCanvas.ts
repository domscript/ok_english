import {useRef, useEffect} from 'react';
// import "./style.css";
import {Game} from '../components/Flintstones/game';

const useCanvas = () =>
  // draw: ((
  //   context: CanvasRenderingContext2D,
  //   frameCount: number,
  //   ratio: number
  // ) => void)[],
  // width: number,
  // height: number
  {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas === null) return;
      const context = canvas.getContext('2d');
      if (context === null) return;
      // const scale = () => {
      //   const ratio = window.devicePixelRatio || 1;
      //   canvas.width = Math.floor(width * ratio);
      //   canvas.height = Math.floor(height * ratio);
      //   canvas.style.width = width + "px";
      //   canvas.style.height = height + "px";
      //   return ratio;
      // };
      const CANVAS_WIDTH = (canvas.width = 1200);
      const CANVAS_HEIGHT = (canvas.height = 720);

      context.fillStyle = 'white';
      context.lineWidth = 3;
      context.strokeStyle = 'black';
      context.font = '40px Bangers';
      context.textAlign = 'center';

      const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);

      let lastTime = 0;

      function animate(timeStamp: number) {
        const deltaTimeInMilliseconds = timeStamp - lastTime;
        lastTime = timeStamp;
        if (!context) return;
        context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        game.update(deltaTimeInMilliseconds);
        game.draw(context as CanvasRenderingContext2D);

        if (!game.gameOver) requestAnimationFrame(animate);
      }
      animate(0);

      // let frameCount = 0;
      // let animationFrameID: number;
      // const render = () => {
      //   context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      // frameCount++;
      // const ratio = scale();
      // for (let i = 0; i < draw.length; i++) {
      //   draw[i](context);
      // }
      //   animationFrameID = window.requestAnimationFrame(render);
      // };
      // render();
      // return () => window.cancelAnimationFrame(animationFrameID);
    }, []);
    return canvasRef;
  };

export default useCanvas;
