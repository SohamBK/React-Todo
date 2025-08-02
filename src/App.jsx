import React, {useState, useEffect} from 'react'
import Layout from './components/Layout'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {useSelector} from 'react-redux'

function App() {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("react-redux-todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Layout>
      <TodoForm />
      <TodoList />
    </Layout>
  )
}

export default App
