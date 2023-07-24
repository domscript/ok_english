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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
}

function Div({children, active = false, className}: DivProps) {
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

export function SimpleTenseTable() {
  const [show, setShow] = useState('');
  const [contraction, setContraction] = useState(false);
  const [ex, setEx] = useState(0);

  // const showExample = (adverb: keyof typeof Data) => {
  const showExample = (num: string) => {
    setShow(num);
    setEx((prev) => {
      if (prev < 1) return prev + 1;
      return 0;
    });
  };

  const contractionF = () => {
    setContraction((prev) => !prev);
    setShow('');
    setEx(0);
  };

  const data = [
    <>
      <p>I danced</p>
      <p>You danced</p>
      <p>He danced</p>
      <p>She danced</p>
      <p>It danced</p>
      <p>We danced</p>
      <p>They danced</p>
    </>,
    <>
      <p>I dance</p>
      <p>You dance</p>
      <p>He dances</p>
      <p>She dances</p>
      <p>It dances</p>
      <p>We dance</p>
      <p>They dance</p>
    </>,
    <>
      {contraction ? (
        <>
          <p>I&apos;ll dance</p>
          <p>You&apos;ll dance</p>
          <p>He&apos;ll dance</p>
          <p>She&apos;ll dance</p>
          <p>It&apos;ll dance</p>
          <p>We&apos;ll dance</p>
          <p>They&apos;ll dance</p>
        </>
      ) : (
        <>
          <p>I will dance</p>
          <p>You will dance</p>
          <p>He will dance</p>
          <p>She will dance</p>
          <p>It will dance</p>
          <p>We will dance</p>
          <p>They will dance</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I didn&apos;t dance</p>
          <p>You didn&apos;t dance</p>
          <p>He didn&apos;t dance</p>
          <p>She didn&apos;t dance</p>
          <p>It didn&apos;t dance</p>
          <p>We didn&apos;t dance</p>
          <p>They didn&apos;t dance</p>
        </>
      ) : (
        <>
          <p>I did not dance</p>
          <p>You did not dance</p>
          <p>He did not dance</p>
          <p>She did not dance</p>
          <p>It did not dance</p>
          <p>We did not dance</p>
          <p>They did not dance</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I don&apos;t dance</p>
          <p>You don&apos;t dance</p>
          <p>He doesn&apos;t dance</p>
          <p>She doesn&apos;t dance</p>
          <p>It doesn&apos;t dance</p>
          <p>We don&apos;t dance</p>
          <p>They don&apos;t dance</p>
        </>
      ) : (
        <>
          <p>I do not dance</p>
          <p>You do not dance</p>
          <p>He does not dance</p>
          <p>She does not dance</p>
          <p>It does not dance</p>
          <p>We do not dance</p>
          <p>They do not dance</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I won&apos;t dance</p>
          <p>You won&apos;t dance</p>
          <p>He won&apos;t dance</p>
          <p>She won&apos;t dance</p>
          <p>It won&apos;t dance</p>
          <p>We won&apos;t dance</p>
          <p>They won&apos;t dance</p>
        </>
      ) : (
        <>
          <p>I will not dance</p>
          <p>You will not dance</p>
          <p>He will not dance</p>
          <p>She will not dance</p>
          <p>It will not dance</p>
          <p>We will not dance</p>
          <p>They will not dance</p>
        </>
      )}
    </>,
    <>
      <p>Did I dance</p>
      <p>Did You dance</p>
      <p>Did He dance</p>
      <p>Did She dance</p>
      <p>Did It dance</p>
      <p>Did We dance</p>
      <p>Did They dance</p>
    </>,
    <>
      <p>Do I dance</p>
      <p>Do You dance</p>
      <p>Does He dance</p>
      <p>Does She dance</p>
      <p>Does It dance</p>
      <p>Do We dance</p>
      <p>Do They dance</p>
    </>,
    <>
      <p>Will I dance</p>
      <p>Will You dance</p>
      <p>Will He dance</p>
      <p>Will She dance</p>
      <p>Will It dance</p>
      <p>Will We dance</p>
      <p>Will They dance</p>
    </>,
  ];

  const examples = [
    <>
      <p>I danced</p>
      <p>You danced</p>
      <p>He danced</p>
      <p>She danced</p>
      <p>It danced</p>
      <p>We danced</p>
      <p>They danced</p>
    </>,
    <>
      <p>I dance</p>
      <p>You dance</p>
      <p>He dances</p>
      <p>She dances</p>
      <p>It dances</p>
      <p>We dance</p>
      <p>They dance</p>
    </>,
    <>
      <p>I&apos;ll dance</p>
      <p>You&apos;ll dance</p>
      <p>He&apos;ll dance</p>
      <p>She&apos;ll dance</p>
      <p>It&apos;ll dance</p>
      <p>We&apos;ll dance</p>
      <p>They&apos;ll dance</p>
    </>,
    <>
      <p>I didn&apos;t dance</p>
      <p>You didn&apos;t dance</p>
      <p>He didn&apos;t dance</p>
      <p>She didn&apos;t dance</p>
      <p>It didn&apos;t dance</p>
      <p>We didn&apos;t dance</p>
      <p>They didn&apos;t dance</p>
    </>,
    <>
      <p>I don&apos;t dance</p>
      <p>You don&apos;t dance</p>
      <p>He doesn&apos;t dance</p>
      <p>She doesn&apos;t dance</p>
      <p>It doesn&apos;t dance</p>
      <p>We don&apos;t dance</p>
      <p>They don&apos;t dance</p>
    </>,
    <>
      <p>I won&apos;t dance</p>
      <p>You won&apos;t dance</p>
      <p>He won&apos;t dance</p>
      <p>She won&apos;t dance</p>
      <p>It won&apos;t dance</p>
      <p>We won&apos;t dance</p>
      <p>They won&apos;t dance</p>
    </>,
    <>
      <p>Did I dance</p>
      <p>Did You dance</p>
      <p>Did He dance</p>
      <p>Did She dance</p>
      <p>Did It dance</p>
      <p>Did We dance</p>
      <p>Did They dance</p>
    </>,
    <>
      <p>Do I dance</p>
      <p>Do You dance</p>
      <p>Does He dance</p>
      <p>Does She dance</p>
      <p>Does It dance</p>
      <p>Do We dance</p>
      <p>Do They dance</p>
    </>,
    <>
      <p>Will I dance</p>
      <p>Will You dance</p>
      <p>Will He dance</p>
      <p>Will She dance</p>
      <p>Will It dance</p>
      <p>Will We dance</p>
      <p>Will They dance</p>{' '}
    </>,
  ];

  return (
    <>
      <div className="grid-rows-2 bg-gray-200 dark:bg-gray-700 text-center rounded-lg">
        <div className=" flex-col">
          <h2>dance</h2>
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
            <Div
              className={`${
                ex === 1
                  ? show[1] === '1'
                    ? 'col-span-7 col-start-2'
                    : 'col-span-1'
                  : 'col-span-3 col-start-2'
              }`}
              active={show[1] === '1'}>
              {ex === 1 && show[1] !== '1' ? 'p' : 'past'}
            </Div>
            <Div
              className={`${
                ex === 1
                  ? show[1] === '2'
                    ? 'col-span-7 col-start-3'
                    : 'col-span-1'
                  : 'col-span-3 col-start-5'
              }`}
              active={show[1] === '2'}>
              {ex === 1 && show[1] !== '2' ? 'p' : 'present'}
            </Div>
            <Div
              className={` ${
                ex === 1
                  ? show[1] === '3'
                    ? 'col-span-7 col-start-4'
                    : 'col-span-1'
                  : 'col-span-3 col-start-8'
              }`}
              active={show[1] === '3'}>
              {ex === 1 && show[1] !== '3' ? 'f' : 'future'}
            </Div>
            {/* ✅ */}
            <Button
              onClick={() => showExample('11')}
              active={show === '11'}
              className={`row-start-2 ${
                ex === 1
                  ? show[1] === '1'
                    ? 'col-span-7 col-start-2'
                    : 'col-span-1'
                  : 'col-span-3 col-start-2'
              }`}>
              {ex === 1 ? (show === '11' ? examples[0] : '-') : data[0]}
            </Button>
            <Button
              onClick={() => showExample('12')}
              active={show === '12'}
              className={`row-start-2 ${
                ex === 1
                  ? show[1] === '2'
                    ? 'col-span-7 col-start-3'
                    : 'col-span-1'
                  : 'col-span-3 col-start-5'
              }`}>
              {ex === 1 ? (show === '12' ? examples[1] : '-') : data[1]}
            </Button>
            <Button
              onClick={() => showExample('13')}
              active={show === '13'}
              className={`row-start-2 ${
                ex === 1
                  ? show[1] === '3'
                    ? 'col-span-7 col-start-4'
                    : 'col-span-1'
                  : 'col-span-3 col-start-8'
              }`}>
              {ex === 1 ? (show === '13' ? examples[2] : '-') : data[2]}
            </Button>
            {/* ❌ */}
            <Button
              onClick={() => showExample('21')}
              active={show === '21'}
              className={`row-start-3 ${
                ex === 1
                  ? show[1] === '1'
                    ? 'col-span-7 col-start-2'
                    : 'col-span-1'
                  : 'col-span-3 col-start-2'
              }`}>
              {ex === 1 ? (show === '21' ? examples[3] : '-') : data[3]}
            </Button>
            <Button
              onClick={() => showExample('22')}
              active={show === '22'}
              className={`row-start-3 ${
                ex === 1
                  ? show[1] === '2'
                    ? 'col-span-7 col-start-3'
                    : 'col-span-1'
                  : 'col-span-3 col-start-5'
              }`}>
              {ex === 1 ? (show === '22' ? examples[4] : '-') : data[4]}
            </Button>
            <Button
              onClick={() => showExample('23')}
              active={show === '23'}
              className={`row-start-3 ${
                ex === 1
                  ? show[1] === '3'
                    ? 'col-span-7 col-start-4'
                    : 'col-span-1'
                  : 'col-span-3 col-start-8'
              }`}>
              {ex === 1 ? (show === '23' ? examples[5] : '-') : data[5]}
            </Button>
            {/* ❔ */}
            <Button
              onClick={() => showExample('31')}
              active={show === '31'}
              className={`row-start-4 ${
                ex === 1
                  ? show[1] === '1'
                    ? 'col-span-7 col-start-2'
                    : 'col-span-1'
                  : 'col-span-3 col-start-2'
              }`}>
              {ex === 1 ? (show === '31' ? examples[6] : '-') : data[6]}
            </Button>
            <Button
              onClick={() => showExample('32')}
              active={show === '32'}
              className={`row-start-4 ${
                ex === 1
                  ? show[1] === '2'
                    ? 'col-span-7 col-start-3'
                    : 'col-span-1'
                  : 'col-span-3 col-start-5'
              }`}>
              {ex === 1 ? (show === '32' ? examples[7] : '-') : data[7]}
            </Button>
            <Button
              onClick={() => showExample('33')}
              active={show === '33'}
              className={`row-start-4 ${
                ex === 1
                  ? show[1] === '3'
                    ? 'col-span-7 col-start-4'
                    : 'col-span-1'
                  : 'col-span-3 col-start-8'
              }`}>
              {ex === 1 ? (show === '33' ? examples[8] : '-') : data[8]}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
