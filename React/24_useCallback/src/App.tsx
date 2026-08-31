import { memo, useCallback, useState } from "react";

type CounterProps = {
  count: number;
  onCountChange: () => void;
};

type UserInfoProps = {
  name: string;
  age: number;
};

type NameInputProps = {
  name: string;
  onNameChange: (name: string) => void;
};

const Counter = memo(function Counter({ count, onCountChange }: CounterProps) {
  console.log("Counter Rendered");

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={onCountChange}>Increment</button>
    </>
  );
});

const UserInfo = memo(function UserInfo({ name, age }: UserInfoProps) {
  console.log("UserInfo Rendered");

  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
});

const NameInput = memo(({ name, onNameChange }: NameInputProps) => {
  console.log("NameInput Rendered");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => onNameChange(e.target.value)}
    />
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleCountChange = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleNameChange = useCallback((name: string) => {
    setName(name);
  }, []);

  return (
    <>
      <Counter count={count} onCountChange={handleCountChange} />
      <UserInfo name="Shehram" age={19} />
      <NameInput name={name} onNameChange={handleNameChange} />
    </>
  );
}

export default App;
