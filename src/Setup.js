export default function Setup({ word, setWord, wpm, setWpm, onStart }) {
  return (
    <section>
      <div>
        <textarea value={word} onChange={(e) => setWord(e.target.value)} />
      </div>
      <div>
        <input
          type="range"
          value={wpm}
          onChange={(e) => setWpm(+e.target.value)}
          min={40}
          max={1000}
          step={40}
        />
        <p>{wpm} words per minute</p>
      </div>

      <button onClick={onStart} disabled={word.length === 0}>
        Let's Go
      </button>
    </section>
  );
}
