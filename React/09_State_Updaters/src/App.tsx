import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(steps: number) {
    setCount((prev) => prev + steps);
  }

  return (
    <>
      <p>Count: {count}</p>

      <button onClick={() => handleClick(-5)}>-5</button>
      <button onClick={() => handleClick(-1)}>-</button>
      <button onClick={() => handleClick(1)}>+</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
}

function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <p>Status: {isOpen ? "Open" : "Closed"}</p>
      <button onClick={handleClick}>Toggle</button>
    </>
  );
}

function App() {
  return (
    <>
      <Counter />
      <Toggle />
    </>
  );
}

export default App;
