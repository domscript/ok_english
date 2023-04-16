'use client';

import useCanvas from '../../hooks/useCanvas';

export interface CanvasWithDataProps {
  className: string;
  width: number;
  height: number;
}

const Canvas = (props: CanvasWithDataProps): JSX.Element => {
  const {width, height, ...rest} = props;
  const canvasRef = useCanvas(width, height);
  return (
    <canvas
      ref={canvasRef}
      width={`${width}px`}
      height={`${height}px`}
      {...rest}
    />
  );
};

export default Canvas;
