import NextImage from 'next/image';

interface ImageProps {
  src: string;
  format: 'svg' | 'png' | 'gif';
  alt: string;
  height: number;
  width: number;
  children: string;
  captionPosition: 'top' | 'bottom' | null;
  dark: boolean;
}

function Caption({text}: {text: string}) {
  return (
    <div className="w-full table">
      <figcaption className="p-1 sm:p-2 mt-0 sm:mt-0 text-gray-40 text-base lg:text-lg text-center leading-tight table-caption">
        {text}
      </figcaption>
    </div>
  );
}

export function Image({
  src,
  format,
  alt,
  height,
  width,
  children,
  captionPosition,
  dark,
}: ImageProps) {
  return (
    <figure className="flex flex-col px-0 p-0 sm:p-2 first:mt-0 mt-10 sm:mt-0 justify-center items-center">
      {captionPosition === 'top' && <Caption text={children} />}
      {dark && (
        <>
          <div className="dark-image">
            <NextImage
              src={`/images/${src}.dark.${format}`}
              alt={alt}
              height={height}
              width={width}
            />
          </div>
          <div className="light-image">
            <NextImage
              src={`/images/${src}.${format}`}
              alt={alt}
              height={height}
              width={width}
            />
          </div>
        </>
      )}
      {!dark && (
        <div>
          <NextImage
            src={`/images/${src}.${format}`}
            alt={alt}
            height={height}
            width={width}
          />
        </div>
      )}
      {(!captionPosition || captionPosition === 'bottom') && (
        <Caption text={children} />
      )}
    </figure>
  );
}
