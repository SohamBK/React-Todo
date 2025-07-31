import { useTodos } from "../context/TodoContext";

function TodoList() {
  const { todos, toggleComplete, deleteTodo } = useTodos();

  return (
    <ul className="mt-4 space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center border px-3 py-2 rounded"
        >
          <span
            className={`flex-1 cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
          <button
            className="text-red-500 hover:underline"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;