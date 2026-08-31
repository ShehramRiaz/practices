import { useEffect, useRef, useState } from "react";

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = currentCount;
  }, [currentCount]);

  function updateCount(steps: number) {
    setCurrentCount((prev) => prev + steps);
  }

  return (
    <>
      <p>Current count: {currentCount}</p>
      <p>Previous count: {previousCount.current}</p>
      <button onClick={() => updateCount(1)}>Count +1</button>
      <button onClick={() => updateCount(5)}>Count +5</button>
    </>
  );
}

export default App;
