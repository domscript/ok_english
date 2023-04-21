import NextImage from 'next/image';
import {ReactNode} from 'react';

interface ImageProps {
  src: string;
  format: 'svg' | 'png' | 'gif';
  alt: string;
  height: number;
  width: number;
  children: ReactNode;
  description?: string;
}

export function LogoLink({
  src,
  alt,
  height,
  width,
  children,
  description,
}: ImageProps) {
  const context0 = (
    <figure className="grid grid-cols-[25px_1fr]">
      <svg className="self-center" height={height} width={width}>
        <use href={`/images/${src}`}></use>
      </svg>
      <figcaption className="pl-4">{children}</figcaption>
    </figure>
  );

  const context1 = (
    <div className="grid grid-cols-[2fr_5fr] items-center">
      <figure className="grid grid-cols-[25px_1fr]">
        <svg className="self-center" height={height} width={width}>
          <use href={`/images/${src}`}></use>
        </svg>
        <figcaption className="pl-4">{children}</figcaption>
      </figure>
      {description}
    </div>
  );

  return !!description ? context1 : context0;
}
