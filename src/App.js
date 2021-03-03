import { useState } from "react";
import Setup from "./Setup";
import Runner from "./Runner";

function App() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");
  const [wpm, setWpm] = useState(10);

  const [startRunner, setStartRunner] = useState(false);

  return (
    <div className="App">
      <h3>Words per minute.</h3>

      <Setup
        word={word}
        setWord={setWord}
        wpm={wpm}
        setWpm={setWpm}
        onStart={() => setStartRunner(true)}
      />
      <Runner />
    </div>
  );
}

export default App;
