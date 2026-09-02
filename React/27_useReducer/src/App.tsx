import { useReducer, useState, type FormEvent, type MouseEvent } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Action =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number }
  | { type: "CLEAR_COMPLETED" };

function reducer(todos: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...todos,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];

    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );

    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.id);

    case "CLEAR_COMPLETED":
      return todos.filter((todo) => !todo.completed);

    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = formData.get("text");

    if (typeof value !== "string" || !value.trim()) {
      return;
    }

    dispatch({
      type: "ADD_TODO",
      text: value.trim(),
    });

    setText("");
  }

  function handleTodoToggle(id: number) {
    dispatch({
      type: "TOGGLE_TODO",
      id,
    });
  }

  function handleDelete(e: MouseEvent<HTMLButtonElement>, id: number) {
    e.stopPropagation();

    dispatch({
      type: "DELETE_TODO",
      id,
    });
  }

  function handleClearCompleted() {
    dispatch({
      type: "CLEAR_COMPLETED",
    });
  }

  return (
    <>
      <h1>Todo List</h1>

      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a todo..."
          />

          <button type="submit">Add</button>
        </form>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id} onClick={() => handleTodoToggle(todo.id)}>
              <span>{todo.text}</span> -{" "}
              <span>{todo.completed ? "Completed" : "Pending"}</span> -{" "}
              <button type="button" onClick={(e) => handleDelete(e, todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        <button type="button" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      </div>
    </>
  );
}

export default App;
