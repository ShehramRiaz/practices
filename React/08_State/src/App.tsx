import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button
        onClick={() => setCount((prev) => prev - 1)}
        className="counter__btn"
      >
        -
      </button>
      <p className="counter__value">{count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="counter__btn"
      >
        +
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
