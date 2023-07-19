import {useState} from 'react';
import cn from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  active?: boolean;
  className?: string;
  style?: Record<string, string>;
}

function Button({
  children,
  onClick,
  active = false,
  className,
  style,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        className,
        `bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 + ${
          (active && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
        }`
      )}>
      {children}
    </button>
  );
}

interface DivProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  style?: Record<string, string>;
}

function Div({children, active = false, className, style}: DivProps) {
  return (
    <div
      className={cn(
        className,
        `rounded-lg overflow-hidden flex flex-col ${
          active && 'bg-cyan-20 dark:bg-cyan-60'
        }`
      )}>
      <p className=" flex-grow"></p>
      {children}
      <p className=" flex-grow"></p>
    </div>
  );
}

export function ToBeSimpleTenseTable() {
  const [show, setShow] = useState('');
  const [contraction, setContraction] = useState(false);

  // const showExample = (adverb: keyof typeof Data) => {
  const showExample = (num: string) => {
    setShow(num);
  };

  const contractionF = () => {
    setContraction((prev) => !prev);
    setShow('');
  };

  const data = [
    <>
      <p>I was</p>
      <p>You were</p>
      <p>He was</p>
      <p>She was</p>
      <p>It was</p>
      <p>We were</p>
      <p>They were</p>
    </>,
    <>
      {contraction ? (
        <>
          <p>I&apos;m</p>
          <p>You&apos;re</p>
          <p>He&apos;s</p>
          <p>She&apos;s</p>
          <p>It&apos;s</p>
          <p>We&apos;re</p>
          <p>They&apos;re</p>
        </>
      ) : (
        <>
          <p>I am</p>
          <p>You are</p>
          <p>He is</p>
          <p>She is</p>
          <p>It is</p>
          <p>We are</p>
          <p>They are</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I&apos;ll be</p>
          <p>You&apos;ll be</p>
          <p>He&apos;ll be</p>
          <p>She&apos;ll be</p>
          <p>It&apos;ll be</p>
          <p>We&apos;ll be</p>
          <p>They&apos;ll be</p>
        </>
      ) : (
        <>
          <p>I will be</p>
          <p>You will be</p>
          <p>He will be</p>
          <p>She will be</p>
          <p>It will be</p>
          <p>We will be</p>
          <p>They will be</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I wasn&apos;t</p>
          <p>You weren&apos;t</p>
          <p>He wasn&apos;t</p>
          <p>She wasn&apos;t</p>
          <p>It wasn&apos;t</p>
          <p>We weren&apos;t</p>
          <p>They weren&apos;t</p>
        </>
      ) : (
        <>
          <p>I was not</p>
          <p>You were not</p>
          <p>He was not</p>
          <p>She was not</p>
          <p>It was not</p>
          <p>We were not</p>
          <p>They were not</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I&apos;m not</p>
          <p>You&apos;re not</p>
          <p>He&apos;s not</p>
          <p>She&apos;s not</p>
          <p>It&apos;s not</p>
          <p>We&apos;re not</p>
          <p>They&apos;re not</p>
        </>
      ) : (
        <>
          <p>I am not</p>
          <p>You are not</p>
          <p>He is not</p>
          <p>She is not</p>
          <p>It is not</p>
          <p>We are not</p>
          <p>They are not</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I won&apos;t be</p>
          <p>You won&apos;t be</p>
          <p>He won&apos;t be</p>
          <p>She won&apos;t be</p>
          <p>It won&apos;t be</p>
          <p>We won&apos;t be</p>
          <p>They won&apos;t be</p>
        </>
      ) : (
        <>
          <p>I will not be</p>
          <p>You will not be</p>
          <p>He will not be</p>
          <p>She will not be</p>
          <p>It will not be</p>
          <p>We will not be</p>
          <p>They will not be</p>
        </>
      )}
    </>,
    <>
      <p>Was I</p>
      <p>Were You</p>
      <p>Was He</p>
      <p>Was She</p>
      <p>Was It</p>
      <p>Were We</p>
      <p>Were They</p>
    </>,
    <>
      <p>Am I</p>
      <p>Are You</p>
      <p>Is He</p>
      <p>Is She</p>
      <p>Is It</p>
      <p>Are We</p>
      <p>Are They</p>
    </>,
    <>
      <p>Will I be</p>
      <p>Will You be</p>
      <p>Will He be</p>
      <p>Will She be</p>
      <p>Will It be</p>
      <p>Will We be</p>
      <p>Will They be</p>
    </>,
  ];

  return (
    <>
      <div className="grid-rows-2 bg-gray-200 dark:bg-gray-700 text-center rounded-lg">
        <div className=" flex-col">
          <h2>to be</h2>
          <div className="grid grid-cols-10 grid-rows-22 gap-[2px] bg-cyan-200 dark:bg-cyan-900 rounded-lg">
            <Button
              onClick={() => contractionF()}
              className={`row-start-1 col-start-1 text-xs`}>
              {contraction ? '<>' : '><'}
            </Button>
            <Div className={`col-start-1 row-start-2`} active={show[0] === '1'}>
              ✅
            </Div>
            <Div className={`col-start-1 row-start-3`} active={show[0] === '2'}>
              ❌
            </Div>
            <Div className={`col-start-1 row-start-4`} active={show[0] === '3'}>
              ❔
            </Div>
            <Div className={`col-span-3 col-start-2`} active={show[1] === '1'}>
              past
            </Div>
            <Div className={`col-span-3 col-start-5`} active={show[1] === '2'}>
              present
            </Div>
            <Div className={`col-span-3 col-start-8`} active={show[1] === '3'}>
              future
            </Div>
            {/* ✅ */}
            <Button
              onClick={() => showExample('11')}
              active={show === '11'}
              className={`row-start-2 col-span-3 col-start-2 row-span-1`}>
              {data[0]}
            </Button>
            <Button
              onClick={() => showExample('12')}
              active={show === '12'}
              className={`row-start-2 col-span-3 col-start-5 row-span-1`}>
              {data[1]}
            </Button>
            <Button
              onClick={() => showExample('13')}
              active={show === '13'}
              className={`row-start-2 col-span-3 col-start-8 row-span-1`}>
              {data[2]}
            </Button>
            {/* ❌ */}
            <Button
              onClick={() => showExample('21')}
              active={show === '21'}
              className={`row-start-3 col-span-3 col-start-2 row-span-1`}>
              {data[3]}
            </Button>
            <Button
              onClick={() => showExample('22')}
              active={show === '22'}
              className={`row-start-3 col-span-3 col-start-5 row-span-1`}>
              {data[4]}
            </Button>
            <Button
              onClick={() => showExample('23')}
              active={show === '23'}
              className={`row-start-3 col-span-3 col-start-8 row-span-1`}>
              {data[5]}
            </Button>
            {/* ❔ */}
            <Button
              onClick={() => showExample('31')}
              active={show === '31'}
              className={`row-start-4 col-span-3 col-start-2 row-span-1`}>
              {data[6]}
            </Button>
            <Button
              onClick={() => showExample('32')}
              active={show === '32'}
              className={`row-start-4 col-span-3 col-start-5 row-span-1`}>
              {data[7]}
            </Button>
            <Button
              onClick={() => showExample('33')}
              active={show === '33'}
              className={`row-start-4 col-span-3 col-start-8 row-span-1`}>
              {data[8]}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
