import { useState, useEffect } from "react";
import "./App.css";

function App() {
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
      </div>
    </>
  );
}

export default App;
