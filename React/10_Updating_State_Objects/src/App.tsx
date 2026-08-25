import { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Shehram",
    age: 19,
    city: "Islamabad",
  });

  function handleChangeName() {
    const newName = prompt("Name");

    if (typeof newName === "string") {
      setUser((prev) => ({
        ...prev,
        name: newName,
      }));
    }
  }

  function handleChangeAge() {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));
  }

  function handleMoveToLahore() {
    setUser((prev) => ({
      ...prev,
      city: "Lahore",
    }));
  }

  return (
    <>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <button onClick={handleChangeName}>Change Name</button>
      <button onClick={handleChangeAge}>Birthday</button>
      <button onClick={handleMoveToLahore}>Move to Lahore</button>
    </>
  );
}

function App() {
  return <UserProfile />;
}

export default App;
