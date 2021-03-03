export default function Setup({ word, setWord, wpm, setWpm, onStart }) {
  return (
    <section className="setup">
      <div>
        <textarea value={word} onChange={(e) => setWord(e.target.value)} />
      </div>
      <div className="input-range">
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

      <button className="btn" onClick={onStart} disabled={word.length === 0}>
        I'm ready
      </button>
    </section>
  );
}
