import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(null);
  useEffect(() => {
    // fetch("http://localhost:8888")
    fetch("http://localhost:8888/test")
      // fetch("http://localhost:8888/error")
      .then((response) => response.json())
      .then((data) => setTest(data));
  }, []);
  return (
    <>
      <div>
        <h1>WatchList</h1>
        {test && (
          <>
            <p>{test.data?.name}</p>
            <p>{test.data?.age}</p>
            <p>{test.data?.email}</p>
          </>
        )}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
