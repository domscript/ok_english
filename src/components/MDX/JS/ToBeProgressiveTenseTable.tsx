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
        `bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 ${
          (active && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
        }`,
        className
      )}>
      {children}
    </button>
  );
}

function ButtonR({children, onClick, active = false, className}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        `bg-red-10 dark:bg-red-60 rounded-lg overflow-hidden hover:bg-red-20 dark:hover:bg-red-50 ${
          (active && 'bg-red-10 dark:bg-red-60') || 'text-xs'
        }`,
        className
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

export function ToBeProgressiveTenseTable() {
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
      <p>I was being ...</p>
      <p>You were being ...</p>
      <p>He was being ...</p>
      <p>She was being ...</p>
      <p>It was being ...</p>
      <p>We were being ...</p>
      <p>They were being ...</p>
    </>,
    <>
      {contraction ? (
        <>
          <p>I&apos;m being ...</p>
          <p>You&apos;re being ...</p>
          <p>He&apos;s being ...</p>
          <p>She&apos;s being ...</p>
          <p>It&apos;s being ...</p>
          <p>We&apos;re being ...</p>
          <p>They&apos;re being ...</p>
        </>
      ) : (
        <>
          <p>I am being ...</p>
          <p>You are being ...</p>
          <p>He is being ...</p>
          <p>She is being ...</p>
          <p>It is being ...</p>
          <p>We are being ...</p>
          <p>They are being ...</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I&apos;ll be being ...</p>
          <p>You&apos;ll be being ...</p>
          <p>He&apos;ll be being ...</p>
          <p>She&apos;ll be being ...</p>
          <p>It&apos;ll be being ...</p>
          <p>We&apos;ll be being ...</p>
          <p>They&apos;ll be being ...</p>
        </>
      ) : (
        <>
          <p>I will be being ...</p>
          <p>You will be being ...</p>
          <p>He will be being ...</p>
          <p>She will be being ...</p>
          <p>It will be being ...</p>
          <p>We will be being ...</p>
          <p>They will be being ...</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I wasn&apos;t being ...</p>
          <p>You weren&apos;t being ...</p>
          <p>He wasn&apos;t being ...</p>
          <p>She wasn&apos;t being ...</p>
          <p>It wasn&apos;t being ...</p>
          <p>We weren&apos;t being ...</p>
          <p>They weren&apos;t being ...</p>
        </>
      ) : (
        <>
          <p>I was not being ...</p>
          <p>You were not being ...</p>
          <p>He was not being ...</p>
          <p>She was not being ...</p>
          <p>It was not being ...</p>
          <p>We were not being ...</p>
          <p>They were not being ...</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I&apos;m not being ...</p>
          <p>You&apos;re not being ...</p>
          <p>He&apos;s not being ...</p>
          <p>She&apos;s not being ...</p>
          <p>It&apos;s not being ...</p>
          <p>We&apos;re not being ...</p>
          <p>They&apos;re not being ...</p>
        </>
      ) : (
        <>
          <p>I am not being ...</p>
          <p>You are not being ...</p>
          <p>He is not being ...</p>
          <p>She is not being ...</p>
          <p>It is not being ...</p>
          <p>We are not being ...</p>
          <p>They are not being ...</p>
        </>
      )}
    </>,
    <>
      {contraction ? (
        <>
          <p>I won&apos;t be being ...</p>
          <p>You won&apos;t be being ...</p>
          <p>He won&apos;t be being ...</p>
          <p>She won&apos;t be being ...</p>
          <p>It won&apos;t be being ...</p>
          <p>We won&apos;t be being ...</p>
          <p>They won&apos;t be being ...</p>
        </>
      ) : (
        <>
          <p>I will not be being ...</p>
          <p>You will not be being ...</p>
          <p>He will not be being ...</p>
          <p>She will not be being ...</p>
          <p>It will not be being ...</p>
          <p>We will not be being ...</p>
          <p>They will not be being ...</p>
        </>
      )}
    </>,
    <>
      <p>Was I being ...</p>
      <p>Were you being ...</p>
      <p>Was he being ...</p>
      <p>Was she being ...</p>
      <p>Was it being ...</p>
      <p>Were we being ...</p>
      <p>Were they being ...</p>
    </>,
    <>
      <p>Am I being ...</p>
      <p>Are you being ...</p>
      <p>Is he being ...</p>
      <p>Is she being ...</p>
      <p>Is it being ...</p>
      <p>Are we being ...</p>
      <p>Are they being ...</p>
    </>,
    <>
      <p>Will I be being ...</p>
      <p>Will you be being ...</p>
      <p>Will he be being ...</p>
      <p>Will she be being ...</p>
      <p>Will it be being ...</p>
      <p>Will we be being ...</p>
      <p>Will they be being ...</p>
    </>,
  ];

  const examples = [
    <>
      <p>I was being patient while waiting for the bus.</p>
      <p>You were being helpful during the entire project.</p>
      <p>He was being considerate of her feelings last night.</p>
      <p>She was being kind to everyone at the party.</p>
      <p>It was being repaired by the mechanic yesterday.</p>
      <p>We were being supportive throughout the difficult times.</p>
      <p>They were being cautious during the storm.</p>
    </>,
    <>
      <p>I am being patient during this process.</p>
      <p>You are being proactive in solving the issue.</p>
      <p>He is being responsible for his actions.</p>
      <p>She is being creative in her artwork.</p>
      <p>It is being repaired by the mechanic.</p>
      <p>We are being supportive of each other.</p>
      <p>They are being cautious while crossing the road.</p>
    </>,
    <>
      <p>I will be being patient during the meeting.</p>
      <p>You will be being helpful to your colleagues.</p>
      <p>He will be being understanding of the situation.</p>
      <p>She will be being supportive of her friends.</p>
      <p>It will be being repaired by the technician.</p>
      <p>We will be being attentive in class.</p>
      <p>They will be being considerate of others' feelings.</p>
    </>,
    <>
      <p>I was not being careless with my work last week.</p>
      <p>You were not being unkind to others at the event.</p>
      <p>He was not being dishonest about the incident.</p>
      <p>She was not being impatient with the kids earlier.</p>
      <p>It was not being used anymore after the upgrade.</p>
      <p>We were not being wasteful with resources back then.</p>
      <p>They were not being disrespectful to their elders.</p>
    </>,
    <>
      <p>I am not being careless with my work.</p>
      <p>You are not being unkind to others.</p>
      <p>He is not being dishonest in his answers.</p>
      <p>She is not being impatient with the kids.</p>
      <p>It is not being used anymore.</p>
      <p>We are not being wasteful with resources.</p>
      <p>They are not being disrespectful to their elders.</p>
    </>,
    <>
      <p>I will not be being impatient with you.</p>
      <p>You will not be being unkind to others.</p>
      <p>He will not be being dishonest in his response.</p>
      <p>She will not be being disrespectful to anyone.</p>
      <p>It will not be being used anymore after the upgrade.</p>
      <p>We will not be being wasteful with resources.</p>
      <p>They will not be being rude to their neighbors.</p>
    </>,
    <>
      <p>Was I being too demanding during the negotiation?</p>
      <p>Were you being truthful with me last night?</p>
      <p>Was he being considerate of others feelings at the time?</p>
      <p>Was she being productive at work yesterday?</p>
      <p>Was it being fixed at that moment?</p>
      <p>Were we being supportive of the decision yesterday?</p>
      <p>Were they being honest about the situation during the meeting?</p>
    </>,
    <>
      <p>Am I being too demanding?</p>
      <p>Are you being truthful with me?</p>
      <p>Is he being considerate of others feelings?</p>
      <p>Is she being productive at work?</p>
      <p>Is it being fixed right now?</p>
      <p>Are we being supportive of the decision?</p>
      <p>Are they being honest about the situation?</p>
    </>,
    <>
      <p>Will I be being too demanding during the event?</p>
      <p>Will you be being honest with me?</p>
      <p>Will he be being considerate of others feelings?</p>
      <p>Will she be being productive at work tomorrow?</p>
      <p>Will it be being fixed by the mechanic?</p>
      <p>Will we be being supportive of the decision?</p>
      <p>Will they be being truthful about the situation?</p>
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
            <ButtonR
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
            </ButtonR>
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
            <ButtonR
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
            </ButtonR>
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
            <ButtonR
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
            </ButtonR>
          </div>
        </div>
      </div>
    </>
  );
}
