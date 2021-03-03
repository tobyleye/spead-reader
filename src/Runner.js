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
  }, []);

  function start() {
    setIsRunning(true);
    intervalId.current = setInterval(() => {
      setCurrentIndex((idx) => {
        const nextIndex = idx + 1;
        if (nextIndex >= lastWordIndex) stop();
        return nextIndex;
      });
    }, (60 * 1000) / wpm);
  }

  function stop() {
    setIsRunning(false);
    clearInterval(intervalId.current);
  }

  const onPreviousWord = () => setCurrentIndex((idx) => idx - 1);
  const onNextWord = () => setCurrentIndex((idx) => idx + 1);

  return (
    <section>
      <h3>Runner</h3>
      <p>Get ready to read at {wpm} words per minute </p>
      <div
        style={{
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid lightgreen",
          margin: "20px 0",
          fontSize: 25,
        }}
      >
        {words[currentIndex]}
      </div>
      <button onClick={onReturn}>Return</button>
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
