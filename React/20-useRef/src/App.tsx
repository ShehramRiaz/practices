import { useRef } from "react";

function App() {
  console.log("Component Rendered");

  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  function clearInput() {
    if (inputRef.current === null) return;

    inputRef.current.value = "";
    focusInput();
  }

  function logInputValue() {
    console.log(inputRef.current?.value);
  }

  return (
    <form>
      <div>
        <label htmlFor="userName">Username</label>
        <input ref={inputRef} type="text" id="userName" />
      </div>

      <div>
        <button type="button" onClick={focusInput}>
          Focus Name Input
        </button>
        <button type="button" onClick={clearInput}>
          Clear Input
        </button>
        <button type="button" onClick={logInputValue}>
          Show Input Value
        </button>
      </div>
    </form>
  );
}

export default App;
