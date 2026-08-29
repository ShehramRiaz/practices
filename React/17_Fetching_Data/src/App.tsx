import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";

    async function loadUsers() {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error("Some Error Occurred");
        }

        const userData: User[] = await response.json();
        setUsers(userData);
      } catch {
        setError("Unable to get User Data.");
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

export default App;
