import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (!todos.length)
    return <p className="mt-6 text-gray-500 text-center">No todos yet.</p>;

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-white border border-gray-200 shadow-sm rounded-lg p-3"
        >
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`flex-1 cursor-pointer ${
              todo.completed
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-sm text-red-500 hover:text-red-600 font-medium transition"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
