import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },

    {
      id: 2,
      text: "Practice TypeScript",
      completed: false,
    },

    {
      id: 3,
      text: "Learn Git",
      completed: true,
    },
  ]);

  function handleAdd() {
    const newTodo: Todo = {
      id: Date.now(),
      text: "Learn State",
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  }

  function handleDelete(id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleToggle(id: number) {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      }),
    );
  }

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.text}</div>
            <div>{todo.completed ? "Completed" : "Pending"}</div>

            <button onClick={() => handleToggle(todo.id)}>
              Completed / Pending
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
