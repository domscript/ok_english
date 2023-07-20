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

export function ToBePerfectTenseTable() {
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
      {contraction ? (
        <>
          <p>I&apos;d been ...</p>
          <p>You&apos;d been ...</p>
          <p>He&apos;d been ...</p>
          <p>She&apos;d been ...</p>
          <p>It&apos;d been ...</p>
          <p>We&apos;d been ...</p>
          <p>They&apos;d been ...</p>
        </>
      ) : (
        <>
          <p>I had been ...</p>
          <p>You had been ...</p>
          <p>He had been ...</p>
          <p>She had been ...</p>
          <p>It had been ...</p>
          <p>We had been ...</p>
          <p>They had been ...</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I&apos;ve been ...</p>
          <p>You&apos;ve been ...</p>
          <p>He&apos;s been ...</p>
          <p>She&apos;s been ...</p>
          <p>It&apos;s been ...</p>
          <p>We&apos;ve been ...</p>
          <p>They&apos;ve been ...</p>
        </>
      ) : (
        <>
          <p>I have been ...</p>
          <p>You have been ...</p>
          <p>He has been ...</p>
          <p>She has been ...</p>
          <p>It has been ...</p>
          <p>We have been ...</p>
          <p>They have been ...</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I&apos;ll have been ...</p>
          <p>You&apos;ll have been ...</p>
          <p>He&apos;ll have been ...</p>
          <p>She&apos;ll have been ...</p>
          <p>It&apos;ll have been a ...</p>
          <p>We&apos;ll have been ...</p>
          <p>They&apos;ll have been ...</p>
        </>
      ) : (
        <>
          <p>I will have been ...</p>
          <p>You will have been ...</p>
          <p>He will have been ...</p>
          <p>She will have been ...</p>
          <p>It will have been a ...</p>
          <p>We will have been ...</p>
          <p>They will have been ...</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I hadn&apos;t been ...</p>
          <p>You hadn&apos;t been ...</p>
          <p>He hadn&apos;t been ...</p>
          <p>She hadn&apos;t been ...</p>
          <p>It hadn&apos;t been ...</p>
          <p>We hadn&apos;t been ...</p>
          <p>They hadn&apos;t been ...</p>
        </>
      ) : (
        <>
          <p>I had not been ...</p>
          <p>You had not been ...</p>
          <p>He had not been ...</p>
          <p>She had not been ...</p>
          <p>It had not been ...</p>
          <p>We had not been ...</p>
          <p>They had not been ...</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I haven&apos;t been ...</p>
          <p>You haven&apos;t been ...</p>
          <p>He hasn&apos;t been ...</p>
          <p>She hasn&apos;t been ...</p>
          <p>It hasn&apos;t been ...</p>
          <p>We haven&apos;t been ...</p>
          <p>They haven&apos;t been ...</p>
        </>
      ) : (
        <>
          <p>I have not been ...</p>
          <p>You have not been ...</p>
          <p>He has not been ...</p>
          <p>She has not been ...</p>
          <p>It has not been ...</p>
          <p>We have not been ...</p>
          <p>They have not been ...</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I won&apos;t have been ...</p>
          <p>You won&apos;t have been ...</p>
          <p>He won&apos;t have been ...</p>
          <p>She won&apos;t have been ...</p>
          <p>It won&apos;t have been ...</p>
          <p>We won&apos;t have been ...</p>
          <p>They won&apos;t have been ...</p>
        </>
      ) : (
        <>
          <p>I will not have been ...</p>
          <p>You will not have been ...</p>
          <p>He will not have been ...</p>
          <p>She will not have been ...</p>
          <p>It will not have been ...</p>
          <p>We will not have been ...</p>
          <p>They will not have been ...</p>
        </>
      )}
    </>,
    <>
      <p>Had I been ...?</p>
      <p>Had you been ...?</p>
      <p>Had he been ...?</p>
      <p>Had she been ...?</p>
      <p>Had it been ...?</p>
      <p>Had we been ...?</p>
      <p>Had they been ...?</p>
    </>,
    <>
      <p>Have I been ...?</p>
      <p>Have you been ...?</p>
      <p>Has he been ...?</p>
      <p>Has she been ...?</p>
      <p>Has it been ...?</p>
      <p>Have we been ...?</p>
      <p>Have they been ...?</p>
    </>,
    <>
      <p>Will I have been ...?</p>
      <p>Will you have been ...?</p>
      <p>Will he have been ...?</p>
      <p>Will she have been ...</p>
      <p>Will it have been ...?</p>
      <p>Will we have been ...?</p>
      <p>Will they have been ...?</p>
    </>,
  ];

  const examples = [
    <>
      <p>I had been there before they arrived.</p>
      <p>You had been so helpful during the project.</p>
      <p>He had been to that place several times.</p>
      <p>She had been waiting for an hour.</p>
      <p>It had been a challenging experience.</p>
      <p>We had been working on this issue all day.</p>
      <p>They had been friends since childhood.</p>
    </>,
    <>
      <p>I have been here before.</p>
      <p>You have been very kind to me.</p>
      <p>He has been an excellent student.</p>
      <p>She has been to that restaurant many times.</p>
      <p>It&apos;s been a long day.</p>
      <p>We have been friends for years.</p>
      <p>They have been working hard.</p>
    </>,
    <>
      <p>I will have been there before you arrive.</p>
      <p>You will have been very helpful throughout the project.</p>
      <p>He will have been to that place by next month.</p>
      <p>She will have been waiting for an hour by then.</p>
      <p>It will have been a challenging experience by the end.</p>
      <p>We will have been working on this issue all day long.</p>
      <p>They will have been friends for ten years.</p>
    </>,
    <>
      <p>I had not been to that country previously.</p>
      <p>You had not been supportive lately.</p>
      <p>He had not been feeling well for days.</p>
      <p>She had not been to that event before.</p>
      <p>It had not been easy for us to manage.</p>
      <p>We had not been successful in our attempts.</p>
      <p>They had not been in touch for years.</p>
    </>,
    <>
      <p>I have not been to that place yet.</p>
      <p>You have not been helpful lately.</p>
      <p>He has not been feeling well.</p>
      <p>She has not been to the gym recently.</p>
      <p>It has not been easy for them.</p>
      <p>We have not been successful in our attempts.</p>
      <p>They have not been getting along.</p>
    </>,
    <>
      <p>I will not have been to that country before the trip.</p>
      <p>You will not have been supportive lately.</p>
      <p>He will not have been feeling well for days.</p>
      <p>She will not have been to that event by the time it starts.</p>
      <p>It will not have been easy for us to accomplish that task.</p>
      <p>We will not have been successful in our attempts by then.</p>
      <p>They will not have been in touch for a while.</p>
    </>,
    <>
      <p>Had I been clear in my instructions?</p>
      <p>Had you been waiting for a long time?</p>
      <p>Had he been to this city before?</p>
      <p>Had she been feeling unwell lately?</p>
      <p>Had it been raining all day long?</p>
      <p>Had we been doing the right thing?</p>
      <p>Had they been expecting our arrival?</p>
    </>,
    <>
      <p>Have I been helpful to you?</p>
      <p>Have you been studying for the exam?</p>
      <p>Has he been there?</p>
      <p>Has she been to this city before?</p>
      <p>Has it been raining all day?</p>
      <p>Have we been doing the right thing?</p>
      <p>Have they been practicing for the performance?</p>
    </>,
    <>
      <p>Will I have been clear in my instructions by then?</p>
      <p>Will you have been waiting for a long time when I arrive?</p>
      <p>Will he have been to this city before next week?</p>
      <p>Will she have been feeling unwell for a while?</p>
      <p>Will it have been raining all day long by the time we get there?</p>
      <p>Will we have been doing the right thing by the end of the month?</p>
      <p>Will they have been expecting our arrival at that time?</p>
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
