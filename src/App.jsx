import React, {useState, useEffect} from 'react'
import Layout from './components/Layout'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  return (
    <Layout>
      <TodoForm />
      <TodoList />
    </Layout>
  )
}

export default App
