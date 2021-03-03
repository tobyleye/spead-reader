import { useEffect, useRef, useState } from "react";

export default function Runner({ word = "", wpm, onReturn }) {
  const [isRunning, setIsRunning] = useState(false);
  const words = word.split(/\s/);
  const [currentIndex, setCurrentIndex] = useState(0); // start from zero durrh
  const intervalId = useRef(null);
  const lastWordIndex = words.length - 1;

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function start() {
    setIsRunning(true);
    intervalId.current = setInterval(() => {
      setCurrentIndex((idx) => {
        if (idx >= lastWordIndex) {
          // do nothing & stop interval
          stop();
          return idx;
        }
        return idx + 1;
      });
    }, (60 / wpm) * 1000);
  }

  function stop() {
    setIsRunning(false);
    clearInterval(intervalId.current);
  }

  const onPreviousWord = () => setCurrentIndex((idx) => idx - 1);
  const onNextWord = () => setCurrentIndex((idx) => idx + 1);

  return (
    <section className="runner">
      {/* <p>Playing at {wpm} words per minute </p> */}
      <div className="screen">{words[currentIndex]}</div>
      <button className="btn" onClick={onReturn}>
        Return
      </button>
      <div className="controls">
        <button
          disabled={currentIndex === 0 || isRunning}
          onClick={onPreviousWord}
        >
          Previous word
        </button>
        {isRunning ? (
          <button onClick={stop}>Pause</button>
        ) : (
          <button onClick={start}>Play</button>
        )}
        <button
          disabled={currentIndex === lastWordIndex || isRunning}
          onClick={onNextWord}
        >
          Next word
        </button>
      </div>
    </section>
  );
}
