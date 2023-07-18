import {useState} from 'react';

export function ToBeSimpleTenseTable() {
  const [show, setShow] = useState('');
  const [contraction, setContraction] = useState(false);

  // const showExample = (adverb: keyof typeof Data) => {
  const showExample = (num: string) => {
    setShow(num);
  };

  const contractionF = () => {
    setContraction((prev) => !prev);
  };

  return (
    <>
      <div className="grid-rows-2 bg-gray-200 dark:bg-gray-700 text-center rounded-lg">
        <div className=" flex-col">
          <h2>to be</h2>
          <div className="grid grid-cols-10 grid-rows-22 gap-[2px] bg-cyan-200 dark:bg-cyan-900 rounded-lg">
            <button
              onClick={() => contractionF()}
              className={`row-start-1 col-start-1 bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 + ${
                (show === '11' && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
              }`}>
              {contraction ? '⬅︎➡︎' : '➡︎⬅︎'}
            </button>

            <div
              className={`col-span-1 row-span-1 col-start-1 row-start-2 rounded-lg overflow-hidden + ${
                show[0] === '1' && 'bg-cyan-10 dark:bg-cyan-60'
              }`}>
              <br />
              <br />
              <br />✅
            </div>
            <div
              className={`col-span-1 row-start-3 col-start-1 rounded-lg overflow-hidden+ ${
                show[0] === '2' && 'bg-cyan-10 dark:bg-cyan-60'
              }`}>
              <br />
              <br />
              <br />❌
            </div>
            <div
              className={`col-span-1 row-start-4 col-start-1  rounded-lg overflow-hidden + ${
                show[0] === '3' && 'bg-cyan-10 dark:bg-cyan-60'
              }`}>
              <br />
              <br />
              <br />❔
            </div>
            <div
              className={`row-start-1 col-span-3 col-start-2 row-span-1 rounded-lg overflow-hidden + ${
                show[1] === '1' && 'bg-cyan-10 dark:bg-cyan-60'
              }`}>
              past
            </div>
            <div
              className={`col-span-3 col-start-5 row-span-1 rounded-lg overflow-hidden + ${
                show[1] === '2' && 'bg-cyan-10 dark:bg-cyan-60'
              }`}>
              present
            </div>
            <div
              className={`col-span-3 col-start-8 row-span-1 rounded-lg overflow-hidden + ${
                (show[1] === '3' && 'bg-cyan-10 dark:bg-cyan-60') || 'text-xs'
              }`}>
              future
            </div>
            {/* ✅ */}
            <button
              onClick={() => showExample('11')}
              className={`row-start-2 col-span-3 col-start-2 row-span-1 bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 + ${
                (show === '11' && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
              }`}>
              <p>I was</p>
              <p>You were</p>
              <p>He was</p>
              <p>She was</p>
              <p>It was</p>
              <p>We were</p>
              <p>They were</p>
            </button>
            <button
              onClick={() => showExample('12')}
              className={`row-start-2 col-span-3 col-start-5 row-span-1 bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 + ${
                (show === '12' && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
              }`}>
              {contraction ? (
                <>
                  <p>I'm</p>
                  <p>You're</p>
                  <p>He's</p>
                  <p>She's</p>
                  <p>It's</p>
                  <p>We're</p>
                  <p>They're</p>
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
            </button>
            <button
              onClick={() => showExample('13')}
              className={`row-start-2 col-span-3 col-start-8 row-span-1 bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 + ${
                (show === '13' && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
              }`}>
              {contraction ? (
                <>
                  <p>I'll be</p>
                  <p>You'll be</p>
                  <p>He'll be</p>
                  <p>She'll be</p>
                  <p>It'll be</p>
                  <p>We'll be</p>
                  <p>They'll be</p>
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
            </button>
            {/* ❌ */}
            <button
              onClick={() => showExample('21')}
              className={`row-start-3 col-span-3 col-start-2 row-span-1 bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 + ${
                (show === '21' && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
              }`}>
              {contraction ? (
                <>
                  <p>I wasn't</p>
                  <p>You weren't</p>
                  <p>He wasn't</p>
                  <p>She wasn't</p>
                  <p>It wasn't</p>
                  <p>We weren't</p>
                  <p>They weren't</p>
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
            </button>
            <button
              onClick={() => showExample('22')}
              className={`row-start-3 col-span-3 col-start-5 row-span-1 bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 + ${
                (show === '22' && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
              }`}>
              {contraction ? (
                <>
                  <p>I'm not</p>
                  <p>You're not</p>
                  <p>He's not</p>
                  <p>She's not</p>
                  <p>It's not</p>
                  <p>We're not</p>
                  <p>They're not</p>
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
            </button>
            <button
              onClick={() => showExample('23')}
              className={`row-start-3 col-span-3 col-start-8 row-span-1 bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 + ${
                (show === '23' && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
              }`}>
              {contraction ? (
                <>
                  <p>I won't be</p>
                  <p>You won't be</p>
                  <p>He won't be</p>
                  <p>She won't be</p>
                  <p>It won't be</p>
                  <p>We won't be</p>
                  <p>They won't be</p>
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
            </button>
            {/* ❔ */}
            <button
              onClick={() => showExample('31')}
              className={`row-start-4 col-span-3 col-start-2 row-span-1 bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 + ${
                (show === '31' && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
              }`}>
              <p>Was I</p>
              <p>Were You</p>
              <p>Was He</p>
              <p>Was She</p>
              <p>Was It</p>
              <p>Were We</p>
              <p>Were They</p>
            </button>
            <button
              onClick={() => showExample('32')}
              className={`row-start-4 col-span-3 col-start-5 row-span-1 bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 + ${
                (show === '32' && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
              }`}>
              <p>Am I</p>
              <p>Are You</p>
              <p>Is He</p>
              <p>Is She</p>
              <p>Is It</p>
              <p>Are We</p>
              <p>Are They</p>
            </button>
            <button
              onClick={() => showExample('33')}
              className={`row-start-4 col-span-3 col-start-8 row-span-1 bg-cyan-10 dark:bg-cyan-70 rounded-lg overflow-hidden hover:bg-cyan-20 dark:hover:bg-cyan-60 + ${
                (show === '33' && 'bg-cyan-20 dark:bg-cyan-60') || 'text-xs'
              }`}>
              <p>Will I be</p>
              <p>Will You be</p>
              <p>Will He be</p>
              <p>Will She be</p>
              <p>Will It be</p>
              <p>Will We be</p>
              <p>Will They be</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
