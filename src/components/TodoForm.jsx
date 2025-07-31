import React, {useState} from 'react'
import {useTodos} from '../context/TodoContext'

function TodoForm() {
    const {addTodo} = useTodos();
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.trim()){
            addTodo(input)
            setInput('')
        }
    }
  return (
    <form onSubmit={handleSubmit} className='flex mb-4'>
        <input 
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Add a Todo'
            className='flex-grow p-2 border rounded-l-md focus:outline-none'
        />
        <button
            type="submit"
            className="px-4 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600"
        >
            Add
        </button>
    </form>
  )
}

export default TodoForm
