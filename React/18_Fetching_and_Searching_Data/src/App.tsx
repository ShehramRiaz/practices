import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type SearchInputProps = {
  searchTerm: string;
  onInputChange: (value: string) => void;
};

type ErrorMessageProps = {
  error: string;
};

function SearchInput({ searchTerm, onInputChange }: SearchInputProps) {
  return (
    <input
      type="search"
      value={searchTerm}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="Search users"
    />
  );
}

function Loading() {
  return <h2>Loading...</h2>;
}

function ErrorMessage({ error }: ErrorMessageProps) {
  return <h2>{error}</h2>;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const controller = new AbortController();

    async function loadUsers() {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to fetch user data.");
        }

        const userData: User[] = await response.json();

        setUsers(userData);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setError("Unable to fetch user data.");
      } finally {
        setLoading(false);
      }
    }

    loadUsers();

    return () => {
      controller.abort();
    };
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  function handleInputChange(value: string) {
    setSearchTerm(value);
  }

  return (
    <>
      <SearchInput searchTerm={searchTerm} onInputChange={handleInputChange} />

      {loading && <Loading />}

      {error && <ErrorMessage error={error} />}

      {!loading && !error && (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
