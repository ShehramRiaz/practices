import { memo, useState } from "react";

type CounterProps = {
  count: number;
  onCountChange: () => void;
};

type UserInfoProps = {
  name: string;
  age: number;
};

type UserInfoObjProps = {
  user: {
    name: string;
    age: number;
  };
};

function Counter({ count, onCountChange }: CounterProps) {
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={onCountChange}>Increment</button>
    </>
  );
}

const UserInfo = memo(function UserInfo({ name, age }: UserInfoProps) {
  console.log("UserInfo rendered");

  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
});

const UserInfoObj = memo(function UserInfoObj({ user }: UserInfoObjProps) {
  console.log("UserInfoObj rendered");

  return (
    <>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </>
  );
});

function App() {
  const [count, setCount] = useState(0);

  function handleCountChange() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <Counter count={count} onCountChange={handleCountChange} />
      <UserInfo name="Shehran" age={19} />
      <UserInfoObj user={{ name: "Shehram", age: 19 }} />
    </>
  );
}

export default App;
