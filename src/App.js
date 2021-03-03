import { useState } from "react";
import Setup from "./Setup";
import Runner from "./Runner";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [wpm, setWpm] = useState(20);

  const [startRunner, setStartRunner] = useState(false);

  return (
    <div className="App">
      <h3>Words per minute.</h3>

      {startRunner ? (
        <Runner word={word} wpm={wpm} onReturn={() => setStartRunner(false)} />
      ) : (
        <Setup
          word={word}
          setWord={setWord}
          wpm={wpm}
          setWpm={setWpm}
          onStart={() => setStartRunner(true)}
        />
      )}
    </div>
  );
}

export default App;
