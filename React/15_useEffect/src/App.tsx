import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  function handleIncrement() {
    setCount((prev) => prev + 1);
    setPageCount((prev) => prev + 1);
  }

  function handleBodyCountIncrement() {
    setPageCount((prev) => prev + 1);
  }

  return (
    <div>
      <p>Count: {pageCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleBodyCountIncrement}>Body Count Increment</button>
    </div>
  );
}

export default App;
