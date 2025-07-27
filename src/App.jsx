import React, {useState, useEffect} from 'react'
import Layout from './components/Layout'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const LOCAL_STORAGE_KEY = "react-todo-list";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return 
    const newTodo = {
      id:Date.now(),
      text: text.trim(),
      isCompleted:false,
    }

    setTodos((prev) => [newTodo, ...prev])
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <Layout>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onRemove={removeTodo} />
    </Layout>
  )
}

export default App
